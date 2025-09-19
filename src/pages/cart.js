import NavBar from "../components/Navbar.js";
//Importar componentes footer

export default function renderCartPage(){
    
    
    //NavBar
    const nav =  document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = NavBar();
    nav.appendChild(navbar);





    //Root (corpo da página)
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';



    //footer




}
