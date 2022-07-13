let menuToggler = document.querySelector('[data-toggle-menu]');
let inPageNav = document.querySelector('[data-in-page-nav]');

if (menuToggler) menuToggler.addEventListener('click', toggleMenu);
if (inPageNav) inPageNav.addEventListener('click', inPageNavigation);
window.addEventListener('unload', clearInputCheckboxes);


// functions for EventListeners
function toggleMenu(e){
    let cssSelector = e.target.dataset.toggleMenu;
    let elem = document.querySelector(`.${cssSelector}`);
    elem.classList.toggle('close');
}

function inPageNavigation(e){
    if(!e.target.closest('li')) return;
    if(e.target.closest('li').classList.contains('active')) return;
    let navigationList = e.target.closest('ul').querySelectorAll('li');
    let elemsToShow;

    for(let i = 0; i < navigationList.length; i++){
        navigationList[i].classList.remove('active');
        if (navigationList[i] !== e.target.closest('li')) continue;
        navigationList[i].classList.add('active');
        elemsToShow = document.querySelectorAll(`[data-in-page-nav-id="${i}"]`);
    }

    if(!elemsToShow.length) return;
    elemsToHide = document.querySelectorAll('[data-in-page-nav-id].show');
    elemsToHide.forEach(elem => elem.classList.remove('show'));

    elemsToShow.forEach(elem => elem.classList.add('show'));
}

function clearInputCheckboxes(){
    let inputs = document.querySelectorAll('input[type=checkbox]');
    for(let i = 0; i < inputs.length; i++){
      inputs[i].checked = false;
    }
}