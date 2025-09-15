export default function DateSelector() {
  const date = document.createElement('div');
  /*Incorporar os arquivos no inner html*/
 

  date.innerHTML = `
  <div class="date">
  <label>
      Data de check-in:
      <input type="date" id="start-date" name="start-date" />
    </label>
    <label>
      Data de check-out:
      <input type="date" id="end-date" name="end-date" />
    </label>
  


  
  
    </div>

 `;
 

return date;
}



 

