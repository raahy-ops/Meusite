import NavBar from "../components/Navbar.js";
import Table from "../components/Table.js";
//Importar componentes footer

export default function renderCartPage(){
    
    
    //NavBar
    const nav =  document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = NavBar();
    nav.appendChild(navbar);


    //Grid, coluna
 
    const divTable =  document.getElementById('table');
    divTable.innerHTML = '';
    const  table = Table();
    divTable.appendChild(table);





    //Root (corpo da página)
    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';



    //footer




}
