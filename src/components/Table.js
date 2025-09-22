export default function Table() {
  const containerTable = document.createElement('div');
    containerTable.className = 'tableContainer';
 
    containerTable.innerHTML = `
    <table class="table table-bordered border-primary">
         <thead class="table-secondary">
    <tr>
      
      <th scope="col">Categoria de Quarto</th>
      <th scope="col">Quantas pessoas?</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
    </table>
 
<button class="btn btn-outline-primary" type="submit">Pesquisar</button>
 
`;
 
 
 
 
 
    return containerTable;
}