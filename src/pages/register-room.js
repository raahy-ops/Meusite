import Navbar from "../components/Navbar.js";
import Form from "../components/LoginForm.js";
import { addRoom } from '../api/roomsAPI.js';

export default function renderRegisterRoom() {
    
    //Menu (navigation)
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();
    const titulo = formulario.querySelector('h1');
    titulo.textContent = 'Gerenciar quarto';

    const contentForm = formulario.querySelector('form');
    contentForm.enctype = "multipart/form-data";

    //nome, numero, qtd_casal, qtd_solteiro, preco, disponivel, multiple files
   const inputNome = contentForm.querySelector('input[type=email]');
    inputNome.type = 'text';
    inputNome.placeholder = "Digite o nome"
    inputNome.name = 'nome';

     const inputNumero = contentForm.querySelector('input[type=password]');
    inputNumero.type = 'text';
    inputNumero.placeholder = "Digite o número"
    inputNumero.name = 'numero';


    const inputQnt_Casal = document.createElement('select');
    inputQnt_Casal.className = 'select-qnt';
    inputQnt_Casal.style.borderWidth = '0.15rem';
    inputQnt_Casal.innerHTML =
    `
    <option class="" value="0">Quantidade cama de casal</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>`

    inputQnt_Casal.name = "qtd_casal";

    const inputQnt_Solteiro = document.createElement('input');
    inputQnt_Solteiro.type = 'number';
    inputQnt_Solteiro.placeholder = 'Quantidade cama solteiro'
    inputQnt_Solteiro.min = 0;
    inputQnt_Solteiro.max = 3;
    inputQnt_Solteiro.name = "qnt_solteiro";

      const inputPreco = document.createElement('input');
    inputPreco.type = 'number';
    inputPreco.placeholder = 'Digite o preço da diária';
    inputPreco.step = "0.01";
    inputPreco.name = "preco";

    const subTitDisp = document.createElement('p');
    subTitDisp.textContent = 'Quarto disponível:'

    const divDisp = document.createElement('div');
    divDisp.className = 'd-flex flex-row gap-2';
    divDisp.style.color = "#6a6a6aff";

    const labelTrue = document.createElement('label');
    labelTrue.textContent = 'Sim';
    const inputDispTrue = document.createElement('input');
    inputDispTrue.type = 'radio';
    inputDispTrue.name = 'disponivel';
    inputDispTrue.value = "1";
    
    const labelFalse = document.createElement('label');
    labelFalse.textContent = 'Não';

    const inputDispFalse = document.createElement('input');
    inputDispFalse.type = 'radio';
    inputDispFalse.name = 'disponivel';
    inputDispFalse.value = "0";

    divDisp.appendChild(subTitDisp);
    divDisp.appendChild(inputDispTrue);
    divDisp.appendChild(labelTrue);

    divDisp.appendChild(inputDispFalse);
    divDisp.appendChild(labelFalse);

    const inputFotos = document.createElement('input');
    inputFotos.className = 'form-control';
    inputFotos.type = 'file';
    inputFotos.id = 'formFileMultiple';
    inputFotos.multiple = true;
    inputFotos.accept = "image/*";
    inputFotos.name = 'fotos[]';
 

    

    contentForm.insertBefore(inputQnt_Casal, contentForm.children[2]);
    contentForm.insertBefore(inputQnt_Solteiro, contentForm.children[3]);
    contentForm.insertBefore(inputPreco, contentForm.children[4]);
    contentForm.insertBefore(divDisp, contentForm.children[5]);
    contentForm.insertBefore(inputFotos, contentForm.children[6]);
 
    const btnRegisterRoom = contentForm.querySelector('button');
    btnRegisterRoom.textContent = 'Cadastrar';

    contentForm.addEventListener('submit', async (e) =>{
        e.preventDefault();
        
        try{
            const response =  await addRoom(contentForm);
            console.log("Resposta ao servideor: ", response);
        }
        catch(error) {
            console.log("Erro ao enviar requisição: " + error.message);

        }
    })

    // divRoot.appendChild()

    //Rodapé
}