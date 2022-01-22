//Catch tag and balise

const titleClass = document.querySelector('h1');
const actionImg = document.querySelector("img");
const displayFooter = document.querySelector("Footer");

console.log(titleClass);
console.log(actionImg);

titleClass.addEventListener("click", () => {
    titleClass.classList.toggle("classh1");
});

actionImg.addEventListener("click", () => {
    actionImg.classList.add("imgCustom")
    preventDefault();
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        displayFooter.style.bottom = 0;
    } else {
        displayFooter.style.bottom = "-50px";
    }
});