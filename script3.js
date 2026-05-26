const bir = document.getElementById("bir");
const iki = document.getElementById("iki");
const uc = document.getElementById("uc");
const dort = document.getElementById("dort");
const audio = new Audio("gulus.m4a");
const logo = document.getElementById("logo");

logo.addEventListener("click", function () {
        audio.play();
});

bir.addEventListener("click", function () {
        window.location.href = "index.html";
});

uc.addEventListener("click", function () {
        window.location.href = "yusuf.html";
});

dort.addEventListener("click", function () {
        window.location.href = "etkinlik.html";
});

iki.addEventListener("click", function () {
        window.location.href = "etkinlikler.html";
});