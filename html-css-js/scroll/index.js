//ScrollY to display and hidden nav
const displayNav = document.querySelector("nav");

console.log(displayNav)

window.addEventListener("scroll", () => {
    //console.log(displayNav.innerHTML = window.pageYOffset + 'px');
    console.log(window.scrollY)

    if ((window.scrollY > 120) && (window.scrollY < 450)) {
        displayNav.style.top = 0;
    } else {
        displayNav.style.top = "-50px";
    }
});