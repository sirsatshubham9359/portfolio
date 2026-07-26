const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

    overlay.classList.toggle("active");

});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click", closeMenu);

});

function closeMenu(){

    hamburger.classList.remove("active");

    navMenu.classList.remove("active");

    overlay.classList.remove("active");

}