//Catch tag and balise
const img1 = document.querySelector('.div-img1');
const img2 = document.querySelector('.div-img2');
const img3 = document.querySelector('.div-img3');

console.log(img1)
console.log(img2)
console.log(img3)

let count = 0;
img1.addEventListener("click", () => {
    count += 1;
    if (count == 1) {
        img1.classList.toggle('myimg1')
        count = 1;
    } else {
        img1.classList.toggle('myimg1s')
        count = 0;
    }
});

img2.addEventListener("click", () => {
    img2.classList.toggle('myimg2')
});

let thirdcount = 0;
img3.addEventListener("click", () => {
    thirdcount += 1;
    if (thirdcount == 1) {
        img3.classList.toggle('myimg3')
        thirdcount = 1;
    } else {
        img3.classList.toggle('myimg3s')
        thirdcount = 0;
    }
});
