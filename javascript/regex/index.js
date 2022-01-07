//Regex (cheat sheet regex)
//Freecodecamp.org

//return -1 or null = error !

let testStr = "mytestCodeforfun";
let testRegex = /Code/;
console.log(testRegex.test(testStr));

//---

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiou]g/;
// start with 'b' and finish with 'g'
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));

//---

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgToRegex = /[a-e]at/;
catStr.match(bgToRegex);
batStr.match(bgToRegex);
matStr.match(bgToRegex);

//---

//For example, /[^aeiou]/gi matches all characters that are not a vowel.

let myRegex = "monmailcom";

vowelReg = /[^aeiou]/i;
let resultVowel = myRegex.match(vowelReg);
console.log(resultVowel);

console.log(myRegex.match(/\w/));
//monmail
console.log(myRegex.match(/\w/gi));
//array by letters
//flag 'g' = Global match
//flag 'i' = ignoring case (uppercase and lowercase)

console.log(myRegex.search(/mail/));
//3

let numRegex = 12345;

console.log(numRegex.toString());
//12345

let numReg = /4/;
let seeResut = numRegex.toString().search(numReg);
console.log(seeResut);
//value of position in list = 3

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
console.log(result);

//Eclude a string
let difficultSpelling = "Mississippi";
let tweekReg = /[s+]/gi;
//try it !
//let tweekReg = /[^s+]/gi;
//Miiippi
let results = difficultSpelling.match(tweekReg);
console.log(results);

//Exclude numbers plus string
let quoteSample = "Blueberry 3.141592653s are delicious.";
//2 methods for same result !
//let newReg = /[^\d." "s{1,}]/gi;
//let newReg = /[^\d." "s+]/gi;
let newReg = /[^s+\d.\s]/gi;
// '\s' = whitespace
let regresult = quoteSample.match(newReg);
console.log(regresult);

//Lookahead NEGATIVE
let sampleWord = "astronaut45";
let pwRegex = /(?!\w{6})(?!\w*\d{2})/;
let resultLookahead = sampleWord.match(pwRegex);
console.log(resultLookahead);

/*
//Lookahead POSITIVE
let sampleWord = "astronaut45";
let pwRegex = /(?!\w{6})(?!\w*\d{2})/;
let resultLookahead = sampleWord.match(pwRegex);
console.log(resultLookahead);
*/




