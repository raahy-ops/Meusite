import Navbar from "../components/Navbar.js";
import Form from "../components/LoginForm.js";

export default function renderManageRoom() {
    
    //Menu (navigation)
    const nav = document.getElementById('navbar');
    nav.innerHTML = '';
    const navbar = Navbar();
    nav.appendChild(navbar);

    const formulario = Form();
    const titulo = formulario.querySelector('h1');
    titulo.textContent = 'Gerenciar quarto';

    const contentForm = formulario.querySelector('form');

    //nome, numero, qtd_casal, qtd_solteiro, preco, disponivel, multiple files
    const inputNome = contentForm.querySelector('input[type=email]');
    inputNome.type = 'text';
    inputNome.placeholder = "Digite o nome"

    const inputNumero = contentForm.querySelector('input[type=password]');
    inputNumero.type = 'text';
    inputNumero.placeholder = "Digite o número"


    const inputQtd_Casal = document.createElement('input');
    inputQtd_Casal.type = 'number';
    inputQtd_Casal.placeholder = 'Quantidade cama Casal'
    inputQtd_Casal.min = 0;
    inputQtd_Casal.max = 10;

    const inputQtd_Solteiro = document.createElement('input');
    inputQtd_Solteiro.type = 'number';
    inputQtd_Solteiro.placeholder = 'Quantidade cama solteiro'
    inputQtd_Solteiro.min = 0;
    inputQtd_Solteiro.max = 3;

    const inputPreco = document.createElement('input');
    inputPreco.type = 'number';
    inputPreco.placeholder = 'Preço da diária';
    inputPreco.step = "0.01";

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
    inputDispTrue.value = true;
    
    const labelFalse = document.createElement('label');
    labelFalse.textContent = 'Não';

    const inputDispFalse = document.createElement('input');
    inputDispFalse.type = 'radio';
    inputDispFalse.name = 'disponivel';
    inputDispFalse.value = false;

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

    inputFotos.name 

    




    contentForm.insertBefore(inputQtd_Casal, contentForm.children[2]);
    contentForm.insertBefore(inputQtd_Solteiro, contentForm.children[3]);
    contentForm.insertBefore(inputPreco, contentForm.children[4]);
    contentForm.insertBefore(divDisp, contentForm.children[5]);
    contentForm.insertBefore(inputFotos, contentForm.children[6]);
 
    const btnRegisterRoom = contentForm.querySelector('button');
    btnRegisterRoom.textContent = 'Cadastrar';

    contentForm.addEventListener('submit', async (e) =>{
        e.preventDefault();
        
        try {
            const response =  await addRoom(this);
            console.log("Resposta ao servideor: " + response);
        }
        catch(error) {
            console.log("Erro ao enviar requisição: " + errpr.message);

        }
    })

    // divRoot.appendChild()

    //Rodapé
}