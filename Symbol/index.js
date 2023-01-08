'use strict'
let symbol  = Symbol('debug')


let s1 = Symbol.for('age')
let obj  ={
  name:'abhijeet',
  surname:'shende',
  [s1]:32
}

for (const key in obj) {
 console.log(obj[key]);
}
console.log(obj);



let person= {
  'name':'abhijeet'
}

function makeAge(){
  let symbol = Symbol.for('age')
  person[symbol]= 32
}
makeAge();
console.log(person);
