//Catch tag and balise

const titleClass = document.querySelector('h1');
const actionImg = document.querySelector("img");

console.log(titleClass);
console.log(actionImg);

titleClass.addEventListener("click", () => {
    titleClass.classList.toggle("classh1");
});

actionImg.addEventListener("click", () => {
    actionImg.classList.add("imgCustom")
    preventDefault();
});
