"use strict"

let hamburgerBar = document.querySelector('.hamburger-bar');
let menu = document.querySelector('.ul-items');

hamburgerBar.addEventListener('click', () =>{
    hamburgerBar.classList.toggle('active');
    menu.classList.toggle('active');
})
document.querySelectorAll('nav-a').forEach(item => item.addEventListener('click', function(){
    hamburgerBar.classList.remove('active');
}))