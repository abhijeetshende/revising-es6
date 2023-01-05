let array = [1, 2];
let [a, b] = array;
printToScreen(a);
printToScreen(b);

let array1 = [1, 2, 3];
let [a1, ...b1] = array1;
printToScreen(a1);
printToScreen(b1);

const person = {
  name: "John Smith",
  age: 30,
  loc: "New York",
  hobbies: ["programming", "reading", "running"],
};

let { name, age,hobbies,loc } = person;
printToScreen(name);
printToScreen(age);
printToScreen(hobbies);
printToScreen(loc);
// printToScreen(location );


// swapping

let a2 =1;
let b2 =2;

 [a2,b2] = [b2,a2];

 printToScreen(a2)
 printToScreen(b2)


