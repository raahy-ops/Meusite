export default function DateSelector() {
  const divDate = document.createElement('div');
  divDate.className = 'divDate';

  /*Incorporar os arquivos no inner html*/
 
const dateChekIn = document.createElement('input');
dateChekIn.type = 'date';  
dateChekIn.className = 'form-control rounded-pill shadow-lg';
dateChekIn.style.width = '200px';
dateChekIn.style.height = '50px';
dateChekIn.style.textAlign = 'center';




const dateChekOut = document.createElement('input');
dateChekOut.type = 'date';
dateChekOut.className = 'card p-3 shadow-lg inputDate';
dateChekOut.className = 'form-control rounded-pill shadow-lg';
dateChekOut.style.width = '200px';
dateChekOut.style.height = '50px';
dateChekOut.style.textAlign = 'center';



const guestAmount = document.createElement('div');
guestAmount.innerHTML = `
  <select class="form-select rounded-pill" height: 50px;">
    <option selected>Hospedes</i></option>
    <option value="1">1 pessoa</option>
    <option value="2">2 pessoas</option>
    <option value="3">3 pessoas</option>
    <option value="4">4 pessoas</option>
    <option value="5">5+ pessoas</option>
  </select>
`;





const btnSearchRoom = document.createElement('submit');
btnSearchRoom.innerHTML = 

`<button type="button" class="btn btn-outline-primary" 
style = "width: 50px; heigth: 50px;"><i class="bi bi-search"></i>
</button>`;








divDate.appendChild(dateChekIn);
divDate.appendChild(dateChekOut);
divDate.appendChild(guestAmount);
divDate.appendChild(btnSearchRoom);
return divDate;
}


 

 





 

