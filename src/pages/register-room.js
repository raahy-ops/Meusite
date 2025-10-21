import NavBar from "../components/Navbar.js";
import FormRoom from "../components/FormRoom.js";
import Footer from "../components/Footer.js";

//Importar componentes footer

export default function renderResgisterRoom(){



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

       
        const formulario = FormRoom();
        
            const titulo = formulario.querySelector('h1');
            titulo.textContent = "Cadastre-se";
        
            //Seleciono o elemento form que está presente em ./componentes/LoginForm.js
            const contentForm = formulario.querySelector('form');

    


}
