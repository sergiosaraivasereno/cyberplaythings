// js/menu.js

const menuToggle = document.getElementById("menuToggle");
const menuLateral = document.getElementById("menuLateral");
const conteudo = document.getElementById("conteudoSite");

let menuAberto = false;

menuToggle.addEventListener("click", () => {
  menuAberto = !menuAberto;

  if (menuAberto) {
    menuLateral.classList.add("mostrar");
    menuToggle.innerHTML = "❌";
    conteudo.style.filter = "blur(2px)";
  } else {
    menuLateral.classList.remove("mostrar");
    menuToggle.innerHTML = "☰";
    conteudo.style.filter = "none";
  }
});
// Novo comportamento do botão de menu para mover junto com a barra lateral

function iniciarMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menuLateral');
  const conteudo = document.getElementById('conteudoSite');

  if (!menuToggle || !menu || !conteudo) return;

  let menuAberto = false;

  menuToggle.addEventListener('click', () => {
    menuAberto = !menuAberto;

    menu.classList.toggle('mostrar');
    conteudo.classList.toggle('blur');
    menuToggle.classList.toggle('ativo');

    // Animação de deslizamento do botão junto com o menu
    if (menuAberto) {
      menuToggle.innerHTML = '❌';
      menuToggle.style.left = '260px';
      menuToggle.style.transform = 'rotate(0deg)';
    } else {
      menuToggle.innerHTML = '☰';
      menuToggle.style.left = '20px';
      menuToggle.style.transform = 'rotate(0deg)';
    }
  });
}

// Espera os elementos estarem carregados
document.addEventListener("DOMContentLoaded", () => {
  const tentativa = setInterval(() => {
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
      clearInterval(tentativa);
      iniciarMenu();
    }
  }, 100);
});
