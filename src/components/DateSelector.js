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
 
const dateCheckIn = document.createElement('input');
dateCheckIn.type = 'date';  
dateCheckIn.className = 'form-control rounded-pill shadow-lg';
dateCheckIn.style.width = '200px';
dateCheckIn.style.height = '45px';
dateCheckIn.style.textAlign = 'center';
dateCheckIn.style.marginTop = '15px';




const dateCheckOut = document.createElement('input');
dateCheckOut.type = 'date';
dateCheckOut.className = 'form-control rounded-pill shadow-lg';
dateCheckOut.style.width = '200px';
dateCheckOut.style.height = '45px';
dateCheckOut.style.textAlign = 'center';
dateCheckOut.style.marginTop = '15px';



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
  container.appendChild(dateCheckIn);
  container.appendChild(dateCheckOut);
  container.appendChild(guestAmount);
  container.appendChild(btnSearchRoom);

  return container;

}


 

 





 

