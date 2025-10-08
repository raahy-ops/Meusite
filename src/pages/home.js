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

        //Validação do preenchimento de infos
        if (!inicio || !fim || Number.isNaN(qnt) || qnt <= 0) {
            console.log("Preencha todos os campos!");
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
    
    
    for (var i=0; i < 3; i++) {
        const cards = RoomCard(i);
        cardsGroup.appendChild(cards);
    }
    

    divRoot.appendChild(cardsGroup);


    //Footer
}