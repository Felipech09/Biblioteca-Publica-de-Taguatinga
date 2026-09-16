document.addEventListener('DOMContentLoaded', function () {

  // ---------- Menu lateral ----------
  var botaoAbrirMenu = document.getElementById('abrir-menu');
  var botaoFecharMenu = document.getElementById('fechar-menu');
  var menuLateral = document.getElementById('menu-lateral');
  var overlayMenu = document.getElementById('overlay-menu');

  function abrirMenu() {
    menuLateral.classList.add('open');
    overlayMenu.classList.add('open');
  }

  function fecharMenu() {
    menuLateral.classList.remove('open');
    overlayMenu.classList.remove('open');
  }

  if (botaoAbrirMenu) botaoAbrirMenu.addEventListener('click', abrirMenu);
  if (botaoFecharMenu) botaoFecharMenu.addEventListener('click', fecharMenu);
  if (overlayMenu) overlayMenu.addEventListener('click', fecharMenu);

  // ---------- Painel de filtros (apenas na página de catálogo) ----------
  var botaoAbrirFiltros = document.getElementById('abrir-filtros');
  var botaoFecharFiltros = document.getElementById('fechar-filtros');
  var painelFiltros = document.getElementById('painel-filtros');
  var overlayFiltros = document.getElementById('overlay-filtros');
  var formularioFiltros = document.getElementById('formulario-filtros');

  function abrirFiltros() {
    painelFiltros.classList.add('open');
    overlayFiltros.classList.add('open');
  }

  function fecharFiltros() {
    painelFiltros.classList.remove('open');
    overlayFiltros.classList.remove('open');
  }

  if (botaoAbrirFiltros) botaoAbrirFiltros.addEventListener('click', abrirFiltros);
  if (botaoFecharFiltros) botaoFecharFiltros.addEventListener('click', fecharFiltros);
  if (overlayFiltros) overlayFiltros.addEventListener('click', fecharFiltros);

  // ---------- Busca de livros ----------
  if (formularioFiltros) {
    formularioFiltros.addEventListener('submit', function (evento) {
      evento.preventDefault();

      var titulo = document.getElementById('titulo').value.trim().toLowerCase();
      var autor = document.getElementById('autor').value.trim().toLowerCase();
      var genero = document.getElementById('genero').value.trim().toLowerCase();
      var disponibilidade = document.getElementById('disponibilidade').value;

      var livros = document.querySelectorAll('.livro');

      livros.forEach(function (livro) {
        var tituloLivro = (livro.querySelector('.informacoes-livro h2')?.textContent || '').trim().toLowerCase();
        var autorLivro = (livro.querySelector('.autor-livro')?.textContent || '').trim().toLowerCase();
        var generoLivro = (livro.querySelector('.genero-livro')?.textContent || '').trim().toLowerCase();
        var statusLivro = livro.querySelector('.status-livro');
        var disponibilidadeLivro = statusLivro && statusLivro.classList.contains('disponivel')
          ? 'disponivel'
          : 'indisponivel';

        var correspondeTitulo = titulo === '' || tituloLivro.includes(titulo);
        var correspondeAutor = autor === '' || autorLivro.includes(autor);
        var correspondeGenero = genero === '' || generoLivro.includes(genero);
        var correspondeDisponibilidade = disponibilidade === '' || disponibilidadeLivro === disponibilidade;

        var corresponde = correspondeTitulo && correspondeAutor && correspondeGenero && correspondeDisponibilidade;
        livro.style.display = corresponde ? '' : 'none';
      });

      fecharFiltros();
    });
  }

});
