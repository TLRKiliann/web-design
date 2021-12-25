// JSON format

let data = [
  {
    pseudo : "Denis",
    age : 33,
    techno : ["JS", "Python", "React"],
    status : false,
  },
  {
    pseudo : "Anastasia",
    age : 28,
    techno : ["JS", "HTML", "CSS"],
    status : true,
  },
  {
    pseudo : "Jasmine",
    age : 35,
    techno : ["JS", "Node.js", "Redux"],
    status : false,
  },
];


//console.log(data.toString())
//console.log(data.map(users));
console.log(data[1].pseudo);
console.log(Object.keys(data[0,1,2]));

document.body.innerHTML = data
  .sort((a,b) => b.age - a.age)
  .map(
    (user) => 
`
  <main>
    <div class="user-card">
      <h2>Pseudo : ${user.pseudo}</h2>
      <p>Age : ${user.age}</p>
      <p>Status : ${user.status ? "Admin" : "Membre"}</p>
    </div>
  </main>
`
)
.join();

//Doesn't work (out of function)
//console.log(user);

//.filter((user) => user.pseudo.includes("Den")) 
//pour afficher uniquement Denis