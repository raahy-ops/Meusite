import { loginRequest } from "../api/authAPI.js";
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




    const texto = document.createElement('p');
    texto.textContent = 'Não possui uma conta? ';
    texto.className = 'texto';

    const link = document.createElement('a');
    link.href = "cadastro";
    link.textContent = 'Cadastre-se!';

    texto.appendChild(link)
    contentForm.insertBefore(texto, contentForm.children[3]);


    //Inputs  e botão presentes no form
    const inputEmail = contentForm.querySelector('input[type="email"');
    const inputSenha = contentForm.querySelector('input[type="password"');
    const btn = contentForm.querySelector('button[type="submit"]');


    //Monitora o clique no botão para acionar um evento de submeter os dados do form
    
    contentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = inputEmail.value.trim();
        const senha  = inputSenha.value.trim();
        
        try{
            const result = await loginRequest(email,senha);
            console.log("Login realizado com sucesso!");
           window.location.pathname = Meusite/home;
        }

        catch{
                console.log("Erro inesperado!");
        }

    })


}
