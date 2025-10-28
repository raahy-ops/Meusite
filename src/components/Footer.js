export default function Footer() {
  const footer = document.createElement('div');

  footer.innerHTML = `
<footer class="text-center py-4 border-top" style="background-color: rgb(225, 225, 225); color: #4e4c43;">    
  <div class="container">
    <!-- Bloco de texto alinhado à esquerda -->
    <div class="text-start mb-3">
      <h5 class="mb-2 fw-bold" style="font-weight: 600;">Aurora Inn Hotel <i class="bi bi-brightness-alt-high-fill ms-2"></i></h5>
      <p class="text-muted" style="font-size: 0.9rem;">Conforto e hospitalidade em cada detalhe.</p>
    </div>

    <!-- Redes sociais + Botão de reserva -->
    <section class="d-flex justify-content-center align-items-center gap-3 mb-4 flex-wrap">
      <a href="#" class="text-reset"><i class="fab fa-twitter fa-lg"></i></a>
      <a href="#" class="text-reset"><i class="fab fa-instagram fa-lg"></i></a>
      <a href="#" class="text-reset"><i class="fab fa-linkedin fa-lg"></i></a>
      <a href="#" class="text-reset"><i class="fab fa-github fa-lg"></i></a>

      <a href="#reserva" class="btn btn-dark btn-sm ms-3">Reservar agora</a>
    </section>

    <p class="text-muted" style="font-size: 0.8rem;">&copy; ${new Date().getFullYear()} Aurora Inn Hotel. Todos os direitos reservados.</p>
  </div>
</footer>
`;

  return footer;
}