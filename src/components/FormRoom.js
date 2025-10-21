export default function FormRoom(){



    const divRoot = document.getElementById('root');
    divRoot.innerHTML = '';
    divRoot.style.alignItems = "center";
    divRoot.style.height = "100vh";


    
    const container = document.createElement('div');
    container.className = 'card p-4 shadow-lg';
    container.style.width = '100%';
    container.style.maxWidth = '400px';
    divRoot.appendChild(container);


   const label = document.createElement('div');
   label.innerHTML = 
            `<div class="form-floating mb-3">
    <input type="text" class="form-control" id="floatingInput" placeholder="Nome do Quarto">
    <label for="floatingInput">Digite o nome do Quarto</label>
    </div>`;

   

    const formulario = document.createElement('form');
    formulario.className = 'd-flex flex-column';

    container.appendChild(label);
    container.appendChild(formulario);


    return divRoot;


   
}