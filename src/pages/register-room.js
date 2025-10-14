import NavBar from "../components/Navbar.js";
import FormRoom from "../components/FormRoom.js";
//Importar componentes footer

export default function renderResgisterRoom(){
    
    
    //NavBar
    const nav =  document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = NavBar();
    nav.appendChild(navbar);


    //Grid, coluna
 
    const Form =  document.getElementById('formroom');
    Form.innerHTML = '';
    const  formroom = FormRoom();
    Form.appendChild(formroom);


    

   


    //Root (corpo da página)
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';



    //footer




}
