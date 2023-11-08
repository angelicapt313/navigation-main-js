const menuHamburguer = document.querySelector('.nav__hamburguer');

menuHamburguer.addEventListener('click', function(e){
    menuHamburguer.classList.toggle('nav__hamburguer--open');
});
