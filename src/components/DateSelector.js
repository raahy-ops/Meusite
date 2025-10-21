export default function DateSelector() {
 
  const divDate = document.createElement('div');
  divDate.className = 'divDate';

  
 const container = document.createElement('div');
  container.className = 'date-selector-container';
  container.style.padding = '20px';
  container.style.borderRadius = '20px';
  container.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
  container.style.backgroundColor = '#e1e1e1ff';
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.gap = '20px';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.maxWidth = '800px';
  container.style.margin = 'auto';


  /*Incorporar os arquivos no inner html*/
 
const dateChekIn = document.createElement('input');
dateChekIn.type = 'date';  
dateChekIn.className = 'form-control rounded-pill shadow-lg';
dateChekIn.style.width = '200px';
dateChekIn.style.height = '45px';
dateChekIn.style.textAlign = 'center';
dateChekIn.style.marginTop = '15px';




const dateChekOut = document.createElement('input');
dateChekOut.type = 'date';
dateChekOut.className = 'form-control rounded-pill shadow-lg';
dateChekOut.style.width = '200px';
dateChekOut.style.height = '45px';
dateChekOut.style.textAlign = 'center';
dateChekOut.style.marginTop = '15px';



const guestAmount = document.createElement('div');
guestAmount.innerHTML = `
  <select class="form-select rounded-pill shadow-lg" style="width: 200px; height: 45px;">
    <option selected>Hóspedes</option>
    <option value="1">1 pessoa</option>
    <option value="2">2 pessoas</option>
    <option value="3">3 pessoas</option>
    <option value="4">4 pessoas</option>
    <option value="5">5+ pessoas</option>
  </select>
`;





const btnSearchRoom = document.createElement('submit');
btnSearchRoom.innerHTML = 

`<button type="button" class="btn btn-primary" 
style = "width: 50px; heigth: 50px;"><i class="bi bi-search"></i>
</button>`;









// Adiciona os elementos ao container
  container.appendChild(dateChekIn);
  container.appendChild(dateChekOut);
  container.appendChild(guestAmount);
  container.appendChild(btnSearchRoom);

  return container;

}


 

 





 

