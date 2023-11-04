const menuHamburguer = document.querySelector('.nav__hamburguer');
const overlaySideBarMenu = document.querySelector('.nav__overlay');

menuHamburguer.addEventListener('click', function(e){
    menuHamburguer.classList.toggle('nav__hamburguer--open');
});
