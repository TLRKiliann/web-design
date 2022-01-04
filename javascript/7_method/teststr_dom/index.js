//To test string
const secLine = document.getElementById("sec-box");
const thirdLine = document.getElementById("third-box");
const forthLine = document.getElementById("forth-box");
const fivthLine = document.getElementById("fivth-box");
const reinit = document.getElementById("mybutt");

console.log(secLine);
console.log(thirdLine);
console.log(forthLine);
console.log(fivthLine);
console.log(reinit);

//innerText - innerHTML - textContent
//Without innerHTML => [object HTMLHeadingElement]

//innerText
secLine.addEventListener("click", () => {
    secLine.innerText = "<h2> -- secLine -- with innerText ! </h2>";
});

//textContent
thirdLine.addEventListener("click", () => {
    thirdLine.textContent = "<h2> -- thirdLine -- with textContent ! </h2>";
});

//Seul innerHTML garde les options de mise en forme CSS !!!
forthLine.addEventListener("click", () => {
    forthLine.innerHTML = "<h2> -- forthLine -- with innerHTML !</h2>";
});

//innerHTML aussi
fivthLine.addEventListener("click", () => {
    fivthLine.innerHTML = "<h2> -- fivthLine -- with innerHTML ! </h2>";
});

//Changement de balise
const forthReinit = document.getElementById("form-forthbox");
const truc = "<h2>Click me again !!!<h2>";

//Action button to write another innerHTML text
reinit.addEventListener("click", () => {
    //secLine.innerText = truc; doesn't work !
    //thirdLine.textContent = truc; doesn't work !
    secLine.innerHTML = truc;
    thirdLine.innerHTML = truc;
    forthLine.innerHTML = truc;
    fivthLine.innerHTML = truc;
});

/*
//Action button reinit
reinit.addEventListener("click", () => {
    //Sans innerHTML => [object HTMLHeadingElement]
    //forthLine.innerHTML = "<h2> youhou <h2>"; --> ok
    document.getElementById("forth-box").reset();
    //forthLine.innerHTML =  forthReinit.innerHTML; //--> NON, car pas la même balise !!!
    //console.log(forthReinit.style.paddingTop = "10px");

    //firstLine.innerText =  reinitSecBox.textContent; --> ok !!! (balise changée mais pas si ok)
    //firstLine.innerText =  reinitSecBox.innerText; --> ok !!! (balise changée mais pas si ok)
});
*/
