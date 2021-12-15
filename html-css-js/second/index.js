// To change color of circle and change bg-color.

const chgColor = document.getElementById("titlebox");
const chgPosition = document.getElementById("rotate-me");

chgColor.addEventListener("click", () => {
  chgColor.classList.toggle("tochangecolor");
});

chgPosition.addEventListener("click", () => {
  chgPosition.classList.toggle("position");
});
