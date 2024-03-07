const MENU = document.querySelector("#Menu");
const SIDE= document.querySelector("#Side");
const SIDE_2 = document.querySelector("#Side-2");
const MOREVIEW = document.querySelector("#More_View");
const MORE = document.querySelector("#More");
const LETTER = document.querySelector("#Letter");
const MAIN = document.querySelector("#Main");
const SUM = document.querySelector("#Sum");

MENU.addEventListener("click" , function () {
    SIDE.classList.toggle("active");
    SIDE_2.classList.toggle("active");
    MAIN.classList.toggle("active");
    SUM.classList.toggle("active");
});

MORE.addEventListener("click" , function () {
    MOREVIEW.classList.toggle("active");
    if(LETTER.textContent == "もっと見る"){LETTER.textContent = "折りたたむ";}
    else{LETTER.textContent = "もっと見る";}
});