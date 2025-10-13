import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js"
import { listAvailableRoomsRequest } from "../api/roomsAPI.js";
import CardLounge from "../components/CardLounge.js";
import Modal from "../components/Modal.js";


export default function renderHomePage() { 
    
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    const foot = document.getElementById('footer');
    foot.innerHTML = '';

    const foote = Footer();
    foot.appendChild(foote);


    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';

    const hero = Hero();
    divRoot.appendChild(hero);

    const dateSelector = DateSelector();
    divRoot.appendChild(dateSelector);
    
    //Criar constante que armazena o valor da data 
    const dateToday = new Date().toISOString.split("T")[0];
    const [dateCheckIn, dateCheckOut] = dateSelector.querySelectorAll('input[type="date"]');
    dateCheckIn.min = dateToday;
    dateCheckOut.min = dateToday;



    const guestAmount = dateSelector.querySelector('select');
    const btnSearchRoom = dateSelector.querySelector('button');

    //Grupo para incorporar cada div de cada card, para aplicar display-flex
    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";
    
    const tituloInfra = document.createElement('h2');
    tituloInfra.textContent = "Conheça nossa Pousada";
    tituloInfra.style.textAlign = "center";
    
    cardsGroup.id = "cards-result";
        
    const cardsGroupInfra = document.createElement('div');
    cardsGroupInfra.className ="cards";



    //para aparecer lounge
    const loungeItems = [
        {path: "restaurante.jpg", title: "Restaurante", text: "Nosso restaurante é um espaço"},

        {path: "segundorestaurante.jpg", title: "Cafeteria Aurora", text: "Nossa Cafeteria é ideal " + "Para passar o fim de tarde!!"},

        {path: "quiosque.jpg", title: "Quiosque Aurora", text: "Nossos quiosques são para todos " + "Um churrasquinho a noite!!"} 

    ];

    for(let i = 0; i < loungeItems.length; i++){
        const cardLounge = CardLounge(loungeItems[i], i);
        cardsGroupInfra.appendChild(cardLounge);
    }

    function getMinDateCheckout(dateCheckIn){
        const minDaily = new Date(dateCheckIn);
        minDaily.setDate(minDaily.getDate() + 1);
        return minDaily.toISOString().split('T')[0];
    }

    //evento para monitorar a alteração na data de checkin para mudar o calendario 
    dateCheckIn.addEventListener('change', async (e) => {
            if(this.value) {
                const minDateCheckout = getMinDateCheckOut(this.value)
                dateCheckOut.min = minDateCheckout;
        }
    })



   


    btnSearchRoom.addEventListener("click", async (e) => {
        e.preventDefault();

        const inicio = (dateCheckIn?.value || "").trim();
        const fim = (dateCheckOut?.value || "").trim();
        const qnt = parseInt(guestAmount?.value || "0", 10);

        //Validação do preenchimento de infos
        if (!inicio || !fim || Number.isNaN(qnt) || qnt <= 0) {
            console.log("Preencha todos os campos!");

           // $('#modalErro').modal('show');
           

            /* Tarefa 1: Renderizar nesse if() posteriormente um modal do bootstrap!
            https://getbootstrap.com/docs/5.3/components/modal/ */
            return;
        }

        /*OBS.: falta impedir que o usuário pesquise por uma data passada!*/
        const dtInicio = new Date(inicio);
        const dtFim = new Date(fim);

    
        

        if (isNaN(dtInicio) || isNaN(dtFim) || dtInicio >= dtFim) {
            console.log("A data de check-out deve ser posterior ao check-in!");
            /* Tarefa 2: Renderizar nesse if() posteriormente um modal do bootstrap!
            https://getbootstrap.com/docs/5.3/components/modal/ */
            return;
        }
        

        console.log("Buscando quartos disponíveis...");
        /* Tarefa 3: Renderizar na tela um símbolo de loading (spinner do bootstrap)!
        https://getbootstrap.com/docs/5.3/components/spinners/ */

        try {
            const result = await listAvailableRoomsRequest({inicio, fim, qnt });
            if (!result.length) {
                console.log("Nenhum quarto disponível para esse período!");
             



                /* Tarefa 4: Renderizar nesse if() posteriormente um modal do bootstrap!
                https://getbootstrap.com/docs/5.3/components/modal/ */
                return;
            }
            cardsGroup.innerHTML = '';
            result.forEach((itemCard, i) => {
                cardsGroup.appendChild(RoomCard(itemCard, i));
            });
        } 
        catch(error) {
            console.log(error);
        }
    });
    
    divRoot.appendChild(cardsGroup);
    divRoot.appendChild(tituloInfra);
    divRoot.appendChild(cardsGroupInfra);


    //Footer
}