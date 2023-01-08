let array = [1, 2, 3, 4, 5];
printToScreen(array);

//push to last index
array.push(6);
printToScreen(array);

//remove from last index
printToScreen(array.pop());
printToScreen(array);

//insert to first index
printToScreen(array.unshift(0));
printToScreen(array);

//remove to first index
printToScreen(array.shift(0));
printToScreen(array);

printToScreen(array.slice(-2));

let arrayToSum = [1, 2, 2, 3, 4, 5, 6];

printToScreen(
  arrayToSum.reduce((total, elem) => {
    return total + elem;
  })
);

let a1 = new Array(5); // [undefined,undefined ...5time]

let a2 = Array.of(5); //[5]

let copyArray = Array.from(arrayToSum); //
console.log(copyArray);

let copyArray1 = Array.from(arrayToSum, (v) => v + 2); //
console.log(copyArray1);

let findArray = copyArray.find((v) => v > 2);
console.log(findArray);

let obj = [{ name: "abhijeeet" }, { name: "shende" }, { name: "orkut" }];

function findObjct(o) {
  return o.name === "abhijeet";
}

console.log(obj.find((v) => v.name == "abhijeet"));
