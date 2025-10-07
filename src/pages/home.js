import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js"
import { listAvailableRoomsRequest } from "../api/roomsAPI.js";


export default function renderHomePage() { 
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

   /* const foot = document.getElementById('footer');
    foot.innerHTML = '';

    const foote = Footer();
    foot.appendChild(foote);*/


    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const hero = Hero();
    divRoot.appendChild(hero);

    const dateSelector = DateSelector();
    divRoot.appendChild(dateSelector);


    const [dateCheckIn, dateCheckOut] = dateSelector.querySelectorAll('input[type="date"]');
    const guestAmount = dateSelector.querySelector('select');
    const btnSearchRoom = dateSelector.querySelector('button');

    //Grupo para incorporar cada div de cada card, para aplicar display-flex
    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";
    cardsGroup.id = "cards-result";







    btnSearchRoom.addEventListener("click", async (e) => {
        e.preventDefault();
        
        const inicio = (dateCheckIn?.value || "").trim();
        const fim = (dateCheckOut?.value || "").trim();
        const qnt = parseInt(guestAmount?.value || "0", 10);

        //Validação dos campos 
        if(!inicio || !fim || Number.isNaN(qnt) || qnt <= 0){
            console.log("Preencha todos os Campos");
            //renderizar nesse if( posterior) adicionar um modal de bootstrap
            return;

        }

        const dtInicio = new Date(inicio);
        const dtFim = new Date(fim);
        
        if(isNaN(dtInicio) || isNaN(dtFim) || dtInicio >= dtFim){
            console.log("A data de check-out deve ser depois de check-in");
            //outro modal
            return;
        }

        console.log("Buscando quartos disponiveis...");
        //renderizar na tela um simbolo de loading 


        try{
            const result = listAvailableRoomsRequest(inicio,fim,qnt);
            if(!result.length) {
                console.log("Nenhum quarto disponível para este período!");


                return;
            }   
            cardsGroup.innerHTML = '';
            result.forEach((itemCard, i) =>{
                cardsGroup.appendChild(RoomCard(itemCard,i));

          });
        }
        catch(error) {
            console.log(error);
        }
    });


   for (var i=0; i < 3; i++) {
        const cards = RoomCard(i);
        cardsGroup.appendChild(cards);
    }

    divRoot.appendChild(cardsGroup);

}