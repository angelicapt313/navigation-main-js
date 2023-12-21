const menuHamburguer = document.querySelector('.nav__hamburguer');
const menuOverlay = document.querySelector('.nav__overlay');


menuHamburguer.addEventListener('click', function(e){
    menuHamburguer.classList.toggle('nav__hamburguer--open');

    //Show menu sidebar nav
    menuOverlay.classList.toggle('nav__overlay--open');
});

menuOverlay.addEventListener('click', function(e){
    const elementTarget = e.target;
    // console.log(e.target.classList.value)

    if(isActive(elementTarget, 'nav__parent') ){
        //parentElement: Acceder al padre(nav__item) del elemento actual(nav__parent)
        //Children(ArrayHTMLCollection): Acceder a sus hijos(span, ul)
        const subMenu = elementTarget.parentElement.children[1];

        if(window.innerWidth < 768){

            // `¿Height actual de submenu es = 0?` SI: el Height ahora es igual al ScrollHeight(alto mínimo que se le da a un elemento para que exista)   
            let heightSubMenu = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;

            subMenu.style.height = `${heightSubMenu}px`
        }
    }
})


function isActive(element, string){
    
    return element.classList.value.includes(string);;
}
