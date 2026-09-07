const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


const links = nav.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});