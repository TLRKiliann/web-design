// To change color of circle and change bg-color.

const chgColorCircle = document.querySelector(".circle");
const chgColorSec = document.querySelector(".circle2");
const chgColorthird = document.querySelector(".circle3");
const chgColorForth = document.querySelector(".circle4");
const backchange = document.querySelector("body")


chgColorCircle.addEventListener("click", () => {
  chgColorCircle.classList.toggle("tochangecircle");
  //document.body.style.background = "skyblue";
  backchange.classList.toggle("backcolor");
});

chgColorSec.addEventListener("click", () => {
  chgColorSec.classList.toggle("tochangecircle2");
  //document.body.style.background = "pink";
  backchange.classList.toggle("backcolor2");
});

chgColorthird.addEventListener("click", () => {
  chgColorthird.classList.toggle("tochangecircle3");
  //document.body.style.background = "white";
  backchange.classList.toggle("backcolor3");
});

chgColorForth.addEventListener("click", () => {
  chgColorForth.classList.toggle("tochangecircle4");
  //document.body.style.background = "black";
  backchange.classList.toggle("backcolor4");
});

