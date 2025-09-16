export default function RoomCard() {
  const containerCard = document.createElement('div');
  containerCard.className = "cardContainer"
  /*Incorporar os arquivos no inner html*/

  containerCard.innerHTML = `

    
  <div class="card" style="width: 18rem;">
    
        <div id="carouselExampleIndicators-RoomCard" class="carousel slide">

        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
          </button>
          <button type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

    <div class="carousel-inner shadow">

      <div class="carousel-item active">
        <img src="public/assets/img/room3.jpg" class="d-block w-100" alt="...">
      </div>

      <div class="carousel-item">
        <img src="public/assets/img/room5.jpg" class="d-block w-100" alt="...">
      </div>

      <div class="carousel-item">
        <img src="public/assets/img/room.jpg" class="d-block w-100" alt="...">
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide="prev">
      <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-RoomCard" data-bs-slide="next">
      <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  

    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <a href="#" class="btn btn-outline-primary">Faça sua Reserva</a>
      </div>
    </div>

 
`;

return containerCard;
}

