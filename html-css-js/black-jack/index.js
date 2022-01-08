// Black-Jack
let cardOne = document.getElementById("card-one");
let cardTwo = document.getElementById("card-two");
let displayCardOne = document.getElementById("result-cardone");
let displayCardTwo = document.getElementById("result-cardtwo");
let totalCard = document.getElementById("total-card");
let commentCard = document.getElementById("comment-card");

let random = Math.floor(Math.random() * 13) + 1;
let secrandom = Math.floor(Math.random() * 13) + 1;

let card = random;
let secondcard = secrandom;

if (card > 10) {
    card = 10;
} else if (card === 1) {
    card = 11;
} else {
    console.log(card,": 2-10");
}

if (secondcard > 10) {
    secondcard = 10;
} else if (secondcard === 1) {
    secondcard = 11;
} else {
    console.log(secondcard,": 2-10");
}

let displayTotal = card + secondcard;

cardOne.addEventListener("click", () => {
    displayCardOne.textContent = card;
});

cardTwo.addEventListener("click", () => {
    displayCardTwo.textContent = secondcard;
    totalCard.textContent = card + secondcard;
    resultCard();
});

function resultCard() {
    if (displayTotal > 21) {
        console.log("greater than 21 LOST !!!")
        message = "You LOST... Greater than 21 !"
    } else if (displayTotal === 21) {
        console.log("You win ! Black-Jack !!!")
        message = "You win ! Black-Jack !!!"
    }
    else {
        console.log("Under 21...");
        message = "Under 21. New Card ?"
    }
    commentCard.textContent = message;
};

function newCard() {
    //let random = getRandomInt(21);
    let random = Math.floor(Math.random() * 13) + 1;
    let newcard = random;
    displayTotal += newcard;
    totalCard.textContent = displayTotal;
    resultCard();
};

/*
function resetAll() {
    document.querySelector(".all-card").reset();
};
*/