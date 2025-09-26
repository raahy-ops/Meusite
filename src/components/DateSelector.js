export default function DateSelector() {
  const divDate = document.createElement('div');
  divDate.className = 'divDate';
  /*Incorporar os arquivos no inner html*/
 
const dateChekIn = document.createElement('input');
dateChekIn.type = 'date';
dateChekIn.className = 'card p-3 shadow-lg inputDate';
dateChekIn.style.width = '200px'; 
dateChekIn.style.maxWidth = '200px';
dateChekIn.style.height = '70px';
dateChekIn.style.maxWidth = '300px';
dateChekIn.style.maxHeight = '70px';

const dateChekOut = document.createElement('input');
dateChekOut.type = 'date';
dateChekOut.className = 'card p-3 shadow-lg inputDate';
dateChekOut.style.width = '200px'; 
dateChekOut.style.maxWidth = '200px';
dateChekOut.style.height = '70px';
dateChekOut.style.maxWidth = '200px';
dateChekOut.style.maxHeight = '70px';


const guestAmount = document.createElement('select');
guestAmount.className = 'card p-4 shadow-lg';
guestAmount.innerHTML = 
`
<option value="">Quantas Pessoas</option>
<option value="1">1 Pessoas</option>
<option value="2">2 Pessoas</option>
<option value="3">3 Pessoas</option>
<option value="4">4 Pessoas</option>
<option value="5">5 ou mais Pessoas</option>`;

guestAmount.style.width = '250px'; 
guestAmount.style.maxWidth = '250px';
guestAmount.style.height = '70px';
guestAmount.style.maxWidth = '250px';
guestAmount.style.maxHeight = '70px';


const btnSearchRoom = document.createElement('button');
btnSearchRoom.type = 'submit';
btnSearchRoom.textContent = 'Pesquisar';
btnSearchRoom.className ='btn btn-primary';

btnSearchRoom.style.width = '100px'; 
btnSearchRoom.style.maxWidth = '100px';
btnSearchRoom.style.height = '70px';
btnSearchRoom.style.maxWidth = '100px';
btnSearchRoom.style.maxHeight = '70px';





divDate.appendChild(dateChekIn);
divDate.appendChild(dateChekOut);
divDate.appendChild(guestAmount);
divDate.appendChild(btnSearchRoom);
return divDate;
}


 

 





 

