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

const date = new Date('2026-05-26T18:45:00');

function guncelle() {
        const simdi = new Date();
        const kalan = date - simdi;

        if(kalan <= 0) {
                document.getElementById("sayac").innerHTML = "Etkinlik başladı!";
                clearInterval(interval);
                return;
        }

const gun = Math.floor(kalan / (1000 * 60 * 60 * 24));
const saat = Math.floor((kalan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const dakika = Math.floor((kalan % (1000 * 60 * 60)) / (1000 * 60));
const saniye = Math.floor((kalan % (1000 * 60)) / 1000);

document.getElementById('sayac').innerHTML =
        `${gun} gün ${saat} saat ${dakika} dakika ${saniye} saniye`;
}

const interval = setInterval(guncelle, 1000);
guncelle();