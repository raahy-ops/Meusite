import NavBar from "../components/Navbar.js";
import Table from "../components/Table.js";
import Footer from "../components/Footer.js";
//Importar componentes footer

export default function renderCartPage(){
    
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

    //Grid, coluna
 
    const divTable =  document.getElementById('table');
    divTable.innerHTML = '';
    const  table = Table();
    divTable.appendChild(table);

}
