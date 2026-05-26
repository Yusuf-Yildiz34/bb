const bir = document.getElementById("bir");
const iki = document.getElementById("iki");
const uc = document.getElementById("uc");
const dort = document.getElementById("dort");
const audio = new Audio("gulus.m4a");
const logo = document.getElementById("logo");
const menuButton = document.getElementById("menu-button");
const tablo = document.querySelector(".side-table");
const caramio = document.querySelector(".caramio");

logo.addEventListener("click", function() {
    audio.play();
});

bir.addEventListener("click", function() {
    window.location.href = "index.html";
});

iki.addEventListener("click", function() {
    window.location.href = "etkinlikler.html";
});

uc.addEventListener("click", function() {
    window.location.href = "yusuf.html";
});

dort.addEventListener("click", function () {
    window.location.href = "etkinlik.html";
});

menuButton.addEventListener("click", function() {
    const side = document.querySelector(".side");
    side.classList.toggle("active");
    tablo.classList.toggle("active");
    caramio.classList.toggle("active");

});
