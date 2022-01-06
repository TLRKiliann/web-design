//Warning between Array and Object !!!
//------------------------------------------------------------

let myfirstobj = {
  name: ["Eric"],
  age: [48],
  skills: ["js", "python"]
};

//We can put new parameter such as :
//myfirstobj.origin = "USA";
//or such as :
myfirstobj.origin = ["USA"];

console.log("--- myfirstobj ---");
console.log(myfirstobj);
console.log("---");

console.log("--- myfirstobj.name ---");
console.log(myfirstobj.name);
console.log("---");

console.log("--- myfirstobj.age[0] ---");
console.log(myfirstobj.age[0]);
console.log("---");

console.log("--- myfirstobj.skills[1] ---");
console.log(myfirstobj.skills[1]);
console.log("---");

console.log("--- Deleting parameters ---");
delete myfirstobj.origin;
console.log("--- myfirstobj - origin paramter ---");
console.log(myfirstobj);
console.log("---");

//------------------------------------------------------------

let mysecondobj = [
  {
    name:"Eric"
  }, 
  {
    age: 48
  }, 
  {
    skills: "js, python"
  }
];

//To add new paramter in this array :
newArg = {origin: "UK"};
mysecondobj.push(newArg);

console.log("--- mysecondobj ---");
console.log(mysecondobj);
console.log("---");

console.log("--- mysecondobj[0] ---");
console.log(mysecondobj[0]);
console.log("---");

console.log("--- mysecondobj[1] ---");
console.log(mysecondobj[1]);
console.log("---");

console.log("--- mysecondobj[2] ---");
console.log(mysecondobj[2]);
console.log("---");

console.log("--- Object.keys(mysecondobj) ---");
console.log(Object.keys(mysecondobj));
console.log("---");

console.log("--- Object.values(mysecondobj) ---");
console.log(Object.values(mysecondobj));
console.log("---");

console.log("--- Object.entries(mysecondobj) ---");
console.log(Object.entries(mysecondobj));
console.log("---");

console.log("--- Deleting parameters ---");
//delete mysecondobj.origin; -->
//Doesn't work. It's an array and not an object!!!
console.log(mysecondobj.splice(mysecondobj.indexOf(origin), 1));

console.log("--- mysecondobj ---");
console.log(mysecondobj);
console.log("---");

//------------------------------------------------------------

let mythirdobj = {
  firstmember:
  {
    name: "Filipa",
    age: 38,
    skills: "js, json"
  },
  secondmember:
  {
    name: "Alicia",
    age: 27,
    skills: "python, json"
  },
  thirdmember:
  {
    name: "Jenna",
    age: 33,
    skills: "MySQL, PHP"
  }
};

console.log("--- mythirdobj ---");
console.log(mythirdobj);
console.log("---");

console.log("--- mythirdobj.firstmember.name ---");
console.log(mythirdobj.firstmember.name);
//In this way that's ok
console.log("---");

console.log("--- mythirdobj.firstmember[name] ---");
console.log(mythirdobj.firstmember[name]);
//return undefined
console.log("---");

console.log("--- mythirdobj.secondmember.skills ---");
console.log(mythirdobj.secondmember.skills);
console.log("---");

console.log("--- mythirdobj.secondmember.age ---");
console.log(mythirdobj.thirdmember.age);
console.log("---");

console.log("--- Object.keys(mythirdobj) ---")
console.log(Object.keys(mythirdobj));
console.log("---");

function getArrayOfUser(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUser(mythirdobj));

console.log("--- Object.keys(mythirdobj).length ---");
mytweekobj = Object.keys(mythirdobj);
console.log(mytweekobj.length);

console.log("--- with loop for ---");

let addMem = [];

for (let i = 0; i < mytweekobj.length; i++) {
  let newArr = addMem.push(mytweekobj[i]);
  console.log(newArr);
}

console.log("---");


//------------------------------------------------------------
//Object nested within an object
//------------------------------------------------------------

console.log("--|--|--|-- Object nested within an object --|--|--|--");

let nestedObject = {
  id : 555444,
  status : "CEO",
  data : {
    firstnum : 1234,
    secnum : 2222,
    id_num : {
      name : "Edmond",
      lastname : "Henri",
      age : 49
    }
  }
};

console.log("--- nestedObject ---");
console.log(nestedObject);
console.log("---");

console.log("--- nestedObject.id ---");
console.log(nestedObject.id);
//Return 555444
console.log("---");

console.log("--- nestedObject.data ---");
console.log(nestedObject.data);
//Return firstnum and secnum values.
console.log("---");

console.log("--- nestedObject.data.id_num.name ---");
console.log(nestedObject.data.id_num.name);
//Return Edmond
console.log("---");


console.log("--- Call of testCallNested function ---");

function testCallNested(obj) {
  let arrExtension = [];
  for (let user in nestedObject) {
    let secArrayExtension = arrExtension.push(user);
    console.log("second array : " + secArrayExtension);
    console.log("user : ", user);
    return secArrayExtension + " " + user;
    //Return 1 and id
  }
};
//To call function testCallNested()
testCallNested(nestedObject);
console.log("--- testCallNested(nestedObject) ---");
console.log(testCallNested(nestedObject));
console.log("---");

console.log("--- Object.keys(obj) ---");
Object.keys(nestedObject);
console.log(Object.keys(nestedObject));
console.log("---");

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Conclusion
//To catch key : for (let user in nestedObject) {}
//ou Object.keys(obj)
//To catch value : nestedObject.id or else ...
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//------------------------------------------------------------
//Anothor test with object nested within an object
//------------------------------------------------------------

console.log("--|--|--|-- Anothor test with object nested within an object --|--|--|--");

const funnyNestedObj = {
  memberOne:
  {
    name: "Filipa",
    age: 38,
    skills: {
      dev : "sys-admin",
      web : "server, security",
      code : "c, php, MySQL"
    }
  },
  memberTwo:
  {
    name: "Alicia",
    age: 27,
    skills: {
      dev : "web-designer",
      web : "css, saas",
      code : "python"
    }
  },
  memberThree:
  {
    name: "Charlotte",
    age: 33,
    skills: {
      dev : "frontend",
      web : "react, js",
      code : "java"
    }
  }
};

console.log("--- funnyNestedObj ---");
console.log(funnyNestedObj);

console.log("--- Object.keys(funnyNestedObj) ---");
console.log(Object.keys(funnyNestedObj));
//Return 3
console.log("---");

console.log("--- Object.values(funnyNestedObj) ---");
console.log(Object.values(funnyNestedObj));
console.log("---");

console.log("--- Object.entries(funnyNestedObj) ---");
console.log(Object.entries(funnyNestedObj));
console.log("---");

console.log("--- We add a new member into funnyNestedObj object ---");

//We add a fourth member into funnyNestedObj object
//Don't push, that's only for array !!! ;) 
funnyNestedObj.memberFour = {
  name: "Gianna",
  age: 31,
  skills: {
    dev : "backend",
    web : "react, Node.js",
    code : "js, json"
  }
};

console.log("--- funnyNestedObj ---");
console.log(funnyNestedObj)
console.log("---");

console.log("--- Object.keys(funnyNestedObj) ---");
console.log(Object.keys(funnyNestedObj));
console.log("---");

//------------------------------------------------------------
//Access Property Names with Bracket Notation.
//First method (for all values)
console.log("--- First METHOD to catch all values ---");
console.log("--- Object.values(funnyNestedObj) ---");
console.log(Object.values(funnyNestedObj));
console.log("---");
//Second method (for one value)
console.log("--- Second METHOD to Access Property Name value ---");
function accessProp(scannedItem) {
  //console.log(funnyNestedObj["memberOne"]);
  return funnyNestedObj[scannedItem];
}
console.log(accessProp("memberOne"));
console.log("---");
//------------------------------------------------------------

console.log("--- Object.entries(funnyNestedObj) ---");
console.log(Object.entries(funnyNestedObj));
console.log("---");

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//To display it in browser (with DOM) :
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function displayInj(obj) {
  document.body.innerHTML += `<h2> Name: ${funnyNestedObj.memberFour.name} </h2>
                             <h2> Age: ${funnyNestedObj.memberFour.age} </h2>
                             <h2> Status: ${funnyNestedObj.memberFour.skills.dev} </h2>`;
};
displayInj(funnyNestedObj)

document.body.innerHTML += `<h4> --- --- ---</h4>`;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//And for all members :
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//------------------------------------------------------------
//Transform object by array !
//------------------------------------------------------------

function displayAllMembers(obj) {
  let dispArray = [];
  for (let member in funnyNestedObj) {
    let secDispArr = dispArray.push(member);
    console.log(secDispArr);
    document.body.innerHTML += `<h6> Member: ${secDispArr} </h6>`;
                               //<h6> Name: ${secDispArr.key} </h6>;
                               //<h6> Status: ${secDispArr.val} </h6>;
  }
};
displayAllMembers(funnyNestedObj);

document.body.innerHTML += `<h4> --- --- ---</h4>`;

//------------------------------------------------------------
//Thats a better way :
//------------------------------------------------------------

const arrayNestedObj = [
  {
    name: "Filipa",
    age: 38,
    skills: {
      dev : "sys-admin",
      web : ["server, security"],
      code : ["c, php, MySQL"]
    }
  },
  {
    name: "Flavia",
    age: 27,
    skills: {
      dev : "web-designer",
      web : ["css, saas"],
      code : "python"
    }
  },
  {
    name: "Charlotte",
    age: 33,
    skills: {
      dev : "frontend",
      web : ["react, js"],
      code : "java"
    }
  }
];


//console.log(arrayNestedObj.sort((a, b) => b.age - a.age));

document.body.innerHTML += arrayNestedObj.sort((a, b) => b.age - a.age)
  .map(
    (member) => 
    `
    <div class="user-card">
      <h3> Name : ${member.name} </h3>
      <h3> Age : ${member.age} </h3>
      <h3> Status : ${member.skills.dev} </h3>
      <h3> Web : ${member.skills.web}</h3>
      <h3> Code : ${member.skills.code}</h3>
    </div>
`
)
  .join("");


//------------------------------------------------------------
//Thats a better way :
//------------------------------------------------------------

const bracketNotation = {
  "Xenia" : 
  {
    name: "Xenia",
    age: 38,
    skills: {
      dev : "sys-admin",
      web : "server, security",
      code : "c, php, MySQL"
    }
  },
  "Sarah" :
  {
    name: "Sarah",
    age: 27,
    skills: {
      dev : "web-designer",
      web : "css, saas",
      code : "python"
    }
  },
  "Triss" :
  {
    name: "Triss",
    age: 33,
    skills: {
      dev : "frontend",
      web : "react, js",
      code : "java"
    }
  }
};

console.log("--- bracketNotation ---");
console.log(bracketNotation);

//To acces property of Xenia
// 1
console.log("--------------------------------");
console.log("--- bracketNotation['Xenia'] ---");
console.log(bracketNotation["Xenia"]);
console.log("---");

// 2
let renameXenia = "Xenia";
console.log("--- renameXenia ---");
console.log(bracketNotation[renameXenia]);
console.log("---");

// 3
let callXenia = bracketNotation["Xenia"];
console.log("--- callXenia ---");
console.log(callXenia);
console.log("---");
console.log("--------------------------------");

//For Triss
console.log("--- Access Property for Triss ---");

function searchProp(scannedItem) {
  return bracketNotation[scannedItem];
};
console.log(searchProp("Triss"));

//------------------------------------------------------------

console.log("--- To access to ALL Property ---")

function everTest(bracketNotation) {
    return bracketNotation;
};
console.log(everTest(bracketNotation));

//------------------------------------------------------------

const user_profile = {
  "username" : "SammyShark",
  "social_media" : [
    {
      "description" : "twitter",
      "link" : "https://twitter.com/digitalocean"
    },
    {
      "description" : "facebook",
      "link" : "https://www.facebook.com/DigitalOceanCloudHosting"
    },
    {
      "description" : "github",
      "link" : "https://github.com/digitalocean"
    }
  ]
};

console.log(user_profile["username"]);
console.log(user_profile["social_media"]);
alert(user_profile.social_media[1].description);
//alert(user_profile.social_media[1].link);

