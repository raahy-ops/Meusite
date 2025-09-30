import LoginForm from "../components/LoginForm.js";
import NavBar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { createRequest } from "../api/clientsAPI.js";



export default function renderRegisterPage() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';

    const navbar = NavBar();
    nav.appendChild(navbar);

    const foot = document.getElementById('footer');
    foot.innerHTML = '';

    const foote = Footer();
    foot.appendChild(foote);

    const formulario = LoginForm();

    const titulo = formulario.querySelector('h1');
    titulo.textContent = "Cadastre-se";

    //Seleciono o elemento form que está presente em ./componentes/LoginForm.js
    const contentForm = formulario.querySelector('form');

    //Crio o input para nome, estilizo e adiciono em contentForm
    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = "Digite seu nome";

    const inputCpf = document.createElement('input');
    inputCpf.type = 'text';
    inputCpf.placeholder = "Digite seu cpf";


    const inputTelefone = document.createElement('input');
    inputTelefone.type = 'text';
    inputTelefone.placeholder = "Digite seu telefone";



    /*Para adicionar input nome ao contentForm, preciso localizar onde está o input
    email, pois quero necessariuamente adicionar anteriormente a ele */
    const inputEmail = formulario.querySelector('input[type="email"]');
    const inputSenha = formulario.querySelector('input[type="password"]');

    contentForm.insertBefore(inputNome, inputEmail);
    contentForm.insertBefore(inputCpf, contentForm.children[1]);
    contentForm.insertBefore(inputTelefone, contentForm.children[2]);


    //Criar o input para confirmar senha e adicionar em contentForm
    const confSenha = document.createElement('input');
    confSenha.type = 'password';
    confSenha.placeholder = "Confirme sua senha";

    /*Adicionar confSenha como "child" de Form que já contém 4 elementos: input nome[0],
    input email[1], input password[2], button btn[3], ao adicionar input confSenha 
    antes de btn[3] ele ocupará a posição [3] e button btn passará para [4] */
    contentForm.insertBefore(confSenha, contentForm.children[5]);

    const btnRegister = formulario.querySelector('button');
    btnRegister.textContent = "Criar conta!";

    contentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = inputNome.value.trim();
        const cpf = inputCpf.value.trim();
        const telefone = inputTelefone.value.trim();
        const email = inputEmail.value.trim();
        const senha = inputSenha.value.trim();

        try {
            const result = createRequest(nome, cpf, telefone, email, senha);
        }
        catch {
            console.log("Erro inesperado!!!!");
        }
    });
}


