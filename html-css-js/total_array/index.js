// Create element and write value from array
const titleWin = document.getElementById("win-title");
const titleLost = document.getElementById("lost-title");
const titleTarget = document.getElementById("total-title");

//win title
const createWinBloc = () => {
    const blocW = document.createElement("td");
    titleWin.appendChild(blocW);
    blocW.textContent = "Win";
    //document.getElementById("win-title").style.textAlign = "center";
}
createWinBloc();

let winArray = [200, 100, 3000, 2500, 4500,
4550, 24900, 2500, 2300, 4300, 2560, 3300];

//all elements in line
const createTableWin = () => {
    for (let j = 0; j < winArray.length; j++) {
        const blockWin = document.createElement("td");
        titleWin.appendChild(blockWin);
        blockWin.textContent = winArray[j];
        //document.getElementById("win-title").style.textAlign = "right";
    }
}
createTableWin();

//lost
const createLostBloc = () => {
    const blockL = document.createElement("td");
    titleLost.appendChild(blockL);
    blockL.textContent = "Lost";
}
createLostBloc();

let lostArray = [100, 200, 20000, 2000, 5500,
4050, 22900, 200, 200, 400, 3560, 300];

//all elements in line
const createTableLost = () => {
    for (let k = 0; k < lostArray.length; k++) {
        const blocLost = document.createElement("td");
        titleLost.appendChild(blocLost);
        blocLost.textContent = lostArray[k];
    }
}
createTableLost();

//init total count
let totalArray = [];
//to substract 2 arrays
for(let l = 0; l <= lostArray.length-1; l++)
    totalArray.push(winArray[l] - lostArray[l]);
  
console.log(totalArray);

//total title
const createTotalTitle = () => {
    const totalTit = document.createElement("td");
    titleTarget.appendChild(totalTit);
    totalTit.textContent = "Total";
}
createTotalTitle();

//all elements in line
const createTableBloc = () => {
    for (let m = 0; m < totalArray.length; m++) {
        const block = document.createElement("td");
        titleTarget.appendChild(block);
        block.textContent = totalArray[m];
    }
}
createTableBloc();
