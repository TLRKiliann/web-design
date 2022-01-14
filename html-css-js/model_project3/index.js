//Button action

/*
Catch only first article
const p4 = document.querySelector("body > article");
querySelectorAll()
with CSS class
with class in HTML
*/

//Call of id buttons
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn10 = document.getElementById("btn-10");

//Call for action
const p1 = document.querySelector("p");
const p2 = document.querySelector(".btn-style2");
const p3 = document.querySelector(".btn-style3");
const p4 = document.getElementById("art-one");
const p5 = document.getElementById("art-two");
const p6 = document.getElementById("art-three");
const p7 = document.querySelector("body");
const p8 = document.querySelector("body > section");
const p9 = document.querySelector("h1");
const p10 = document.querySelector("section");
const p11 = document.querySelector(".btn-style9");

console.log(p11)

btn1.addEventListener("click", () => {
    p1.style.color = "red";
    p1.style.transform = "rotateZ(45deg)";
});

btn2.addEventListener("click", () => {
    p2.style.background = "black";
    p2.style.color = "white";
});

btn3.addEventListener("click", () => {
    p3.style.border = "3px dashed blue";
    p3.style.borderRadius = "10px";
});

let counter = 0;
btn4.addEventListener("click", () => {
    counter += 1;
    if (counter == 1) {
        p4.style.color = "orange";
        p5.style.color = "orange";
        p6.style.color = "orange";
    }
    else if (counter == 2) {
        p4.style.color = "navy";
        p5.style.color = "navy";
        p6.style.color = "navy";
        counter = 0;
    }
    else {
        counter = 0;
    }
});

let scount = 0;
btn5.addEventListener("click", () => {
    scount += 1;
    if (scount == 1) {
        p7.style.background = "orange";
    }
    else if (scount == 2) {
        document.body.style.background = "lightblue";
        scount = 0;
    }
    else {
        scount = 0;
    }
});

btn6.addEventListener("click", () => {
    p8.style.color = "orange";
});

btn7.addEventListener("click", () => {
    p9.classList.toggle("custom-art");
});

btn8.addEventListener("click", () => {
    p10.classList.toggle("customjs");
});

let count = 0;
btn9.addEventListener("click", () => {
    p11.innerHTML = `Well done !`;
    count += 1;
    if (count < 2) {
        p11.innerHTML += `<p>Hello !!!</p><p>That's funny</p><p>to test!</p>`;
    } else {
        p11.innerHTML = `Button Style 9`
        count = 0;
    }
});

btn10.addEventListener("click", () => {
    alert("You've call an alert !");
})

window.addEventListener("load", () => {
  console.log("Document LOADED !");
});
