//Tester ARRAY

console.log("- We have got 2 arrays -");

array1 = ["python", "html", "css"];
array2 = ["js", "java", "react"];

console.log('array1 = ["python", "html", "css"];');
console.log('array2 = ["js", "java", "react"];');

//---

console.log("--- concat() ---");
let addArray = array2.concat(array1);
console.log(addArray);
//["js", "java", "react", "python", "html", "css"]

console.log("--- Addition doesn't work ! ---");
let fusionArray = (array1 + array2)
console.log(fusionArray);
//"python", "html", "css""js", "java", "react"

console.log("--- For having 2 arrays in One ---");
console.log("let testfArray = [array1, array2]");
let testfArray = [array1, array2]
console.log(testfArray);
//2 arrays in One.

console.log("--- For having all elements in One array with spread (...) ---");
console.log("let secTestArray = [...array2, ...array1]");
let secTestArray = [...array2, ...array1];
console.log(secTestArray);
//All elements in One.
//["js", "java", "react", "python", "html", "css"]
//Like concat()

//---

console.log("--- join(' ') ---");
let thirdTest = array1.join(" ");
console.log(thirdTest);

console.log("--- join('-') ---");
let fourthTest = array2.join("-");
console.log(fourthTest);

console.log("--- join('.') ---");
let fifthTest = array2.join(".");
console.log(fifthTest);

//---

console.log("- We have got a third array (array3) -");

let array3 = ["python", "html", "css", "js", "java", "react", "javascript"];
console.log(array3);
console.log("--- forEach() ---")
array3.forEach((languages) => console.log(languages));

console.log("--- slice() ---");
let sixthTest = array3.slice(2, 4);
console.log("array3.slice(2, 4);");
console.log(sixthTest);
//"css", "js"

//---

console.log("--- indexOf() ---");
let sevthTest = array3.indexOf("java");
console.log('let sevthTest = array3.indexOf("java");');
console.log(sevthTest);
//4

//---

console.log("--- every() ---");
array3.every((languages) => console.log("java"));
//java
//if every element is the same in array.

//---

console.log("--- some() ---");
array3.some((word) => console.log('java'));
//7 java
//7 = nb items in array3.
//some element in array.

//---

console.log("--- shift() ---");
let eigthTest = array3.shift();
console.log("let eigthTest = array3.shift();");
console.log(eigthTest);
console.log("--- array3 (first out) ---");
console.log(array3);
//first element out

//---

console.log("--- pop() ---");
let ninthTest = array3.pop();
console.log("let ninthTest = array3.pop();");
console.log(ninthTest);
console.log("--- array3 (last out) ---");
console.log(array3);
//last element out

//---

console.log("- We have got a third array (array4) -");

let array4 = ["redux", "nass", "saas", "bootstrap", "nodejs"];
console.log(array4);

console.log("--- splice(n1, n2, arg) ---");
let tenthTest = array4.splice(2, 4, ...array2);
console.log(tenthTest);
console.log(array4);

//---

console.log("- We have got a third array (arrayNum) -");

let arrayNum = [1,5,23,65,11,18];
console.log(arrayNum);

console.log("--- push() ---");
arrayNum.push(38);
console.log(arrayNum);
//[1,5,23,65,11,18,38]

//---

console.log("--- reduce() ---");
let testerNum = arrayNum.reduce((x, y) => x + y);
console.log(testerNum);
//161

//---

//FILTER - MAP - SORT
//-------------------

console.log("--- filter() ---");
let filterTest = arrayNum.filter((x) => x > 10);
console.log(filterTest);
//[23, 65, 11, 18, 38]

console.log("--- sort() (basic) ---");
let sortTest = arrayNum.sort();
console.log(sortTest);
//[1, 11, 18, 23, 38, 5, 65]

console.log("--- sort() (reverse) ---");
let sortRetest = arrayNum.sort((a, b) => b - a);
console.log(sortRetest);
//[65, 38, 23, 18, 11, 5, 1]

console.log("--- map() ---");
console.log("--- to enumerate all elements ---")
let mapTest = arrayNum.map((number) => console.log(number));
//65
//38
//23
//18
//11
//5
//1

//arrayNum.map((number) => (document.body.innerHTML += `<li> ${number} </li>`));
//document.body.innerHTML += arrayNum.map((number) => `<li> ${number} </li>`).join("");

document.body.innerHTML += arrayNum
  .map((number) => `<li> ${number} </li>`)
  .join("");

let time = "02:00:00";

console.log(time);