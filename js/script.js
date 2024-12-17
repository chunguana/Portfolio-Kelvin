/* ===== Turns the menu hamburger into an 'X' ===== */

const menuHamburguer = document.querySelector('.menu-hamburguer'); // Corrigir o erro de aspas

menuHamburguer.addEventListener('click', () => {
    toggleMenu();  // Corrigir a chamada da função toggleMenu
});

function toggleMenu() {  // Corrigir o nome da função para toggleMenu

    const nav = document.querySelector('.nav-responsive'); // Corrigir a definição da variável 'nav'

    menuHamburguer.classList.toggle('change');  // Altera a classe para 'change'

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';  // Torna o menu visível
    } else {
        nav.style.display = 'none';  // Torna o menu invisível
    }
}