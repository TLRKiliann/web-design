//Rotation click action
const first = document.getElementById("btn-1");
const second = document.getElementById("btn-2");
const third = document.getElementById("btn-3");
const fourth = document.getElementById("btn-4");

const titOne = document.querySelector(".first-title");
const titSec = document.querySelector(".second-title");
const titThree = document.querySelector(".third-title");
const titFour = document.querySelector(".fourth-title");


console.log(first)

/*function resetAll() {
    first.classList.remove("first-rotation");
}
*/

first.addEventListener("click", () => {
    titOne.classList.toggle("first-rotation");
});

second.addEventListener("click", () => {
    titSec.classList.toggle("second-rotation");
});

third.addEventListener("click", () => {
    titThree.classList.toggle("third-rotation");
});

fourth.addEventListener("click", () => {
    titFour.classList.toggle("fourth-rotation");
});
