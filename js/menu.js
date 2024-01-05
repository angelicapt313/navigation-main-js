const menuHamburguer = document.querySelector('.nav__hamburguer');
const menuOverlay = document.querySelector('.nav__overlay');
let visibleDropdown = menuOverlay;


menuHamburguer.addEventListener('click', function(e){
    menuHamburguer.classList.toggle('nav__hamburguer--open');

    //Show menu sidebar nav
    menuOverlay.classList.toggle('nav__overlay--open');
});

menuOverlay.addEventListener('click', function(e){
    const elementTarget = e.target;
    

    if(isActive(elementTarget, 'nav__parent') ){
        //parentElement: Acceder al padre(nav__item) del elemento actual(nav__parent)
        //Children(ArrayHTMLCollection): Acceder a sus hijos(span, ul)
        const subMenu = elementTarget.parentElement.children[1];

        if(window.innerWidth < 768){

            // `¿Height actual de submenu es = 0?` SI: el Height ahora es igual al ScrollHeight(alto mínimo que se le da a un elemento para que exista)   
            let heightSubMenu = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;

            subMenu.style.height = `${heightSubMenu}px`
        }else{
            //!SI EL ELEMENTO SUBMENU TIENE LA CLASS NAV__INNER--SHOW SIGNIFICA QUE ARROJARÁ FALSO
            if(!isActive(subMenu, 'nav__inner--show')){
                closeDropdown(visibleDropdown);
            }
                subMenu.classList.toggle('nav__inner--show');
                visibleDropdown = subMenu;
        }
    }
})

function closeDropdown(visibleDropdown){
    if(isActive(visibleDropdown, 'nav__inner--show')){
        visibleDropdown.classList.remove('nav__inner--show');
    }
}


function isActive(element, string){
    
    return element.classList.value.includes(string);;
}


window.addEventListener('resize', ()=>{
    closeDropdown(visibleDropdown);
    if(window.innerWidth > 768){
        const navInners = document.querySelectorAll('.nav__inner');

        navInners.forEach(navInner => {
            navInner.style.height= '';
        });
    }
})