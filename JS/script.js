let menuToggler = document.querySelector('[data-toggle-menu]');

menuToggler.addEventListener('click', toggleMenu);
window.addEventListener('unload', clearInputCheckboxes);


// functions for EventListeners
function toggleMenu(e){
    let cssSelector = e.target.dataset.toggleMenu;
    console.log(cssSelector);
    let elem = document.querySelector(`.${cssSelector}`);
    elem.classList.toggle('close');
}

function clearInputCheckboxes(){
    let inputs = document.querySelectorAll('input[type=checkbox]');
    for(let i = 0; i < inputs.length; i++){
      inputs[i].checked = false;
    }
}