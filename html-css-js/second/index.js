// To change color of circle and change bg-color.

const chgColor = document.getElementById("titlebox");
const chgPosition = document.getElementById("titlebox");

chgColor.addEventListener("click", () => {
  chgColor.classList.toggle("tochangecolor");
  chgPosition.classList.toggle("position");
});

