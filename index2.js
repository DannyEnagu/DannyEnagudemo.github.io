let burger= document.querySelector('.toggle-menu');
let menu = document.querySelector('.menu');
let menuOpen = false;

burger.addEventListener('click', function(e){
    e.preventDefault();
    if(!menuOpen){
       menu.classList.add('is-open');
       menuOpen = true;
    } 
    else{
       menu.classList.remove('is-open');
        menuOpen = false;
    }
} );
