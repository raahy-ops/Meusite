import { loginRequest, saveToken } from "../api/authAPI.js";
import LoginForm from "../components/LoginForm.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";


export default function renderLoginPage() { 
    
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    const foot = document.getElementById('footer');
    foot.innerHTML = '';
   
       const foote = Footer();
       foot.appendChild(foote);

    const formulario = LoginForm();
    const contentForm = formulario.querySelector('form');


    // botão cadastrar para hospede e funcionário
    
    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';
    btnGroup.innerHTML = 
    `
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
    <label class="btn btn-light" for="btnradio1">Hospede</label>

    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
    <label class="btn btn-light" for="btnradio2">Funcionário</label>`;


    contentForm.appendChild(btnGroup);
    





    const texto = document.createElement('p');
    texto.textContent = 'Não possui uma conta? ';
    texto.className = 'texto';
    texto.style.color = '#7E7F60';

    const link = document.createElement('a');
    link.href = "cadastro";
    link.textContent = 'Cadastre-se!';
    link.style.color = '#916445';
   


    texto.appendChild(link)
    contentForm.insertBefore(texto, contentForm.children[3]);


    //Inputs  e botão presentes no form
    const inputEmail = contentForm.querySelector('input[type="email"');
    const inputSenha = contentForm.querySelector('input[type="password"');
    //const btn = contentForm.querySelector('button[type="submit"]');


    //Monitora o clique no botão para acionar um evento de submeter os dados do form
    
    contentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = inputEmail.value.trim();
        const senha  = inputSenha.value.trim();
        
        try{
            const result = await loginRequest(email,senha);
           //window.location.pathname = "/Meusite/home";
           saveToken(result.token);
        }

        catch{
                console.log("Erro inesperado!");
            }

    })


}
