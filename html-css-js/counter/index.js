
const countTimes = document.getElementById("counter");
const displayCount = document.getElementById("nb-count");

const saveCount = document.getElementById("saver");
const displaySave = document.getElementById("nb-save");

let count = 0;


countTimes.addEventListener("click", () => {
	count += 1;
	displayCount.innerHTML = count;
});

saveCount.addEventListener("click", () => {
	displaySave.innerHTML += count + ", ";
	count = 0;
	displayCount.innerHTML = count;
});