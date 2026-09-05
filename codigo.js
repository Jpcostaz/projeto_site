let slideAtual = 0;

const slides = document.querySelectorAll(".pictures");
const container = document.querySelector(".slides");
const esquerda = document.querySelector(".setaesquerda");
const direita = document.querySelector(".setadireita");


direita.addEventListener("click", function () {

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    container.style.transform = `translateX(-${slideAtual * 100}%)`;
});


esquerda.addEventListener("click", function () {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    container.style.transform = `translateX(-${slideAtual * 100}%)`;
});