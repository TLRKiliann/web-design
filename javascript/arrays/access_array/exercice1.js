function copyMachine(arr, num) {
    let newArray = [];
    while (num < 1) {
        newArray.push([...arr]);
    num--;
    }
    console.log(newArray);
    return newArray;
}

copyMachine([true, false, true], 2);