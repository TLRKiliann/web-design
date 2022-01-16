//Tester Object Method
//slice() and splice()

/*
Slice and Splice
You are given two arrays and an index.

Copy each element of the first array into 
the second array, in order.

Begin inserting elements at index n of 
the second array.

Return the resulting array. The input arrays 
should remain the same after the function runs.
*/

/*
On vous donne deux tableaux et un index.

Copiez chaque élément du premier tableau dans 
le second tableau, dans l'ordre.

Commencez à insérer les éléments à l'indice n 
du second tableau.

Retournez le tableau résultant. Les tableaux 
d'entrée doivent rester les mêmes après 
l'exécution de la fonction.
*/

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice()
  console.log(newArr)
  newArr.splice(n, 0, ...arr1)
  console.log(newArr)
  return newArr
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//--- CHUNKY MONKEY
//To cut one array in 2 others without split()

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  console.log(newArr)
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


//Another maner with loop :
const ratings = [];
for (let i = 0; i < watchList.length; i++) {
  ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
}

//We could replace by...
for (let item in tems) {
    watchList.map((item) => {
        item = item['Title'],
        item = item['imdbRating']
    });
};

console.log(newObject);