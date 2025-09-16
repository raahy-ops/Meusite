import Hero from "../components/Hero.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import RoomCard from "../components/RoomCard.js";
import DateSelector from "../components/DateSelector.js";

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

        for(var i=0; i < 3; i++ ){
        const card = RoomCard();
        divRoot.appendChild(card);
    }
    



   /* const date = DateSelector();
    divRoot.appendChild(date);*/






}