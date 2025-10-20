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
          <a class="nav-link" aria-current="page" href="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
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
        <a class="nav-link" href="cadastro" >Cadastre-se</a>
        </li>

        <li class="nav-item">
        <a class="nav-link" href="login" >Login</a>
        </li>

        
        <li class="nav-item">
            <a class="nav-link" href="register-room" >Registrar Quartos</a>
        </li>

      </ul>


      <div>
         <a href="cart"><img src ="public/assets/img/cart4.svg" style = "width: 30px; heigth:30px;"></a>
      </div>


    </div>
  </div >
</nav >`;

return navbar;
}