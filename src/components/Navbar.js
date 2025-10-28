export default function NavBar() {
  const navbar = document.createElement('div');
  /*Incorporar os arquivos no inner html*/

  navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">

    <a class="navbar-brand" href="home">
      <img src ="public/assets/img/Borcelle (2).png" style = "width: 50px; heigth:50px;">
    
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="home"><i class="bi bi-house text-dark"></i><span class="ms-2">Home</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="cadastro"><i class="bi bi-person-add text-dark"></i><span class="ms-2">Cadastre-se</span></a>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="login"><i class="bi bi-person-lock text-dark"></i><span class="ms-2">Login</span></a>
        </li>

        
        <li class="nav-item">
            <a class="nav-link" href="register-room"><i class="bi bi-lamp text-dark"></i><span class="ms-2">Registrar Quartos</span></a>
        </li>
      </ul>

      <div>
         <a href="cart">
          <i class="bi bi-suitcase-lg fs-5 text-dark ms-2"></i></a>
      </div>

    </div>
  </div >
</nav >`;




return navbar;
}