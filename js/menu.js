const menuHamburguer = document.querySelector('.nav__hamburguer');
const menuOverlay = document.querySelector('.nav__overlay');


menuHamburguer.addEventListener('click', function(e){
    menuHamburguer.classList.toggle('nav__hamburguer--open');

    //Show menu sidebar nav
    menuOverlay.classList.toggle('nav__overlay--open');
});



