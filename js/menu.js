const menuHamburguer = document.querySelector('.nav__hamburguer');
const menuOverlay = document.querySelector('.nav__overlay');
const btnActive = document.querySelector('.main__button');
let visibleDropdown = menuOverlay;


btnActive.addEventListener('click', function(){
    btnActive.classList.add('main__button--active');
})

menuHamburguer.addEventListener('click', function(e){
    menuHamburguer.classList.toggle('nav__hamburguer--open');

    //Show menu sidebar nav
    menuOverlay.classList.toggle('nav__overlay--open');
});

menuOverlay.addEventListener('click', function(e){
    const elementTarget = e.target;
    

    if(isActive(elementTarget, 'nav__parent') ){
        const subMenu = elementTarget.parentElement.children[1];

        if(window.innerWidth < 768){

            let heightSubMenu = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;

            subMenu.style.height = `${heightSubMenu}px`
        }else{
       
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