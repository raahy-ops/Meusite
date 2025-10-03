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
    
    const btnSearchRoom = dateSelector.querySelector('button');

    btnSearchRoom.addEventListener("click", async (e) => {
        e.preventDefault();
        const inicio = "2025-09-10";
        const fim = "2025-09-20";
        const qnt = 2;

        try{
            const quartos = listAvailableRoomsRequest(inicio,fim,qnt);
            
        }
        catch(error) {
            console.log(error);

        }
    });


    
    //Grupo para incorporar cada div de cada card, para aplicar display-flex
    const cardsGroup = document.createElement('div');
    cardsGroup.className = "cards";


   for (var i=0; i < 3; i++) {
        const cards = RoomCard(i);
        cardsGroup.appendChild(cards);
    }

    divRoot.appendChild(cardsGroup);

}