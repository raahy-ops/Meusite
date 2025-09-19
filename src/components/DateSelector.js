export default function DateSelector() {
  const divDate = document.createElement('div');
  divDate.className = 'divDate';
  /*Incorporar os arquivos no inner html*/
 
const dateChekIn = document.createElement('input');
dateChekIn.type = 'date';
dateChekIn.className = 'card p-3 shadow-lg inputDate';

const dateChekOut = document.createElement('input');
dateChekOut.type = 'date';
dateChekOut.className = 'card p-3 shadow-lg inputDate';


const guestAmount = document.createElement('select');
guestAmount.className = 'card p-3 shadow-lg inputDate';
guestAmount.innerHTML = 



`


<option value="">Quantas Pessoas</option>
<option value="1">1 Pessoas</option>
<option value="2">2 Pessoas</option>
<option value="3">3 Pessoas</option>
<option value="4">4 Pessoas</option>
<option value="5">5 ou mais Pessoas</option>`;


const btnSearchRoom = document.createElement('button');
btnSearchRoom.type = 'submit';
btnSearchRoom.textContent = 'Pesquisar';
btnSearchRoom.className ='btn btn-primary';



divDate.appendChild(dateChekIn);
divDate.appendChild(dateChekOut);
divDate.appendChild(guestAmount);
divDate.appendChild(btnSearchRoom);
return divDate;
}


 

 





 

