//tester for testing

//--- number method ---

myArray = [1, 3, 4, 19, "youhou", "after"]

mynblong = myArray.length;
console.log("mystring.length :");
console.log(mynblong);

console.log("myarray.filter():");
const result = myArray.filter(checkAdult);

/*
function checkAdult(age) {
  if (age >= 18) {
    console.log("age is ok = " + age);
    return age;
  } else {
    console.log("age is not ok = " + age);
    return false;
  }
}
*/

//with ternary

function checkAdult(x) {
  console.log(x >= 18 ? "age is good = "+ x : "age is less than 18 or not ok = "+ x);
}


console.log("addArray.map():");
const mapArray = myArray.map(toList);

function toList(arg) {
  console.log("Elements of myarray : " + arg);
  return arg;
}

console.log("newArray = myArray.splice(2,2):");
newArray = myArray.splice(2,2);

console.log("newArray");
console.log(newArray);
//return [4, 'youhou']

console.log("myArray");
console.log(myArray);
//return [1, 3, 'after']

console.log("myArray.push('next'):");
myArray.push("next");
console.log(myArray);
//return [1, 3, 'after', 'next']

console.log("myArray.pop():");
myArray.pop();
console.log(myArray);
//return [1, 3, "after"]

console.log("myArray.shift()+unshift('*'):");
myArray.shift();
myArray.unshift("*");
console.log(myArray);
//return ["*", 3, "after"]

console.log("typeof myArray:");
console.log(typeof myArray);
//return object


//--- String Method ---

mystring = "I learn javascript for working";

seemystring = mystring.length;
console.log("mystring.length :");
console.log(seemystring);

console.log("mystring.slice(10):");
newmystring = mystring.slice(10);
console.log(newmystring);
//return vascript for working

console.log(mystring.indexOf("learn"));


//--- FUNCTION 1 ---

//Function
function callArray(modelArray) {
  console.log(modelArray[1]);
  // return 2
};

modelArray = [1, 2, 3, 4, 5];
callArray(modelArray);


//--- FUNCTION 2 ---

function seeArgs(x, y) {
  console.log(x + y);
  //return 5
  return x + y;
  //use console and write :
  //seeArgs(2, 5)
  //return 7
};

seeArgs(2, 3);


//--- FUNCTION 3 (called her-self) ---
//look at the console

((a, b) => {
  console.log(999 + 1);
})();


//--- Function 4 with object ---

const users = [
  {
    pseudo : "Douglas",
    techno : "javascript",
  },
  {
    pseudo : "Elise",
    techno : "node.js"
  }
]

console.log(users);
console.log(users[1].pseudo);
console.log(users[1].techno);
users.push({pseudo : "Jack", techno : "python"});
console.log(users[2]);
console.log(users);
console.log(Object.keys(users));


//--- Function 5 ternary ---

const age = 26;
const beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); 
//return "Beer"


//--- Function 6 function arrow ---
//(args) in left and {instruction} in right

//It's not need to declare arg in this case
const treasure = () => { 
  if (newage >= 21) {
    console.log("Cognac")
    return "Cognac"
  }
  "Juice"
};
let newage = 22
treasure(22);

//--- FUNCTION
/*
function countOnline(usersObj) {
  // Only change code below this line
  let res = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      res++;
    }
  }
  return res;
  // Only change code above this line
}
*/
/*
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
*/
/*
function destroyer(arr) {
  let newArr = Arr;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 1; j <= newArr.length; j++) {
      console.log(arr[i]);
    }
    //delete destroyer[i]; 
  } 
  return arr;
}
*/

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
/*
function destroyer(arr) {
  let valsToRemove = Object.values(arguments).slice(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(item => item !== null);
}
*/

function truncateString(str, num) {
  //let strcut = [];
  //strcut.push(str, num);
  //console.log(strcut);
  if (str.length > num) {
    console.log(str.slice(0, num) + "...");
    return str.slice(0, num) + "...";
  } else {
    console.log(str);
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);