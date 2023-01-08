//creating class
function Person() {
  this.name = "Abhijeet";
  this.sayHello = function () {
    console.log(`hello I am ${this.name}`);
  };
}

let p = new Person();
console.log(p);
console.log(p.sayHello());
/**
 * You cannnot create objects from object liternal
 */

try {
  let classex = {
    name: "abhijeet from classex",
    hello: function hello(params) {
      console.log(`hello from ${this.name}`);
    },
  };
  console.log(classex.hello());

  //trying to create object out of this
  let c = new classex();
} catch (error) {
  console.log(error.message);
}



//creating classes using Class keyword

class Person1{
  constructor(){
    this.name = 'abhijeet from Person1'
  }
  sayHello() {
    console.log(`hello from Person1 ${this.name}`);
  }
}

let p1 = new Person1();
p1.sayHello();


console.log(p1.__proto__ );
console.log(Person1.prototype );
//check if the p1 object belongs to Person class 
console.log(p1.__proto__ === Person1.prototype);



/**
 * Inheritance
 * 
 */

class BasePerson{
  constructor(name){
    this.name = name
  }
  sayHello(){
    console.log(`this Hello is from BasePerson class hello ${this.name}`);
  }
}

class PersonExample extends BasePerson{
  // if no constructor is defined and value passed which creating object no need to call Super
}
let p_inheritance = new PersonExample('Abhijeet');
p_inheritance.sayHello();

class PersonExample2 extends BasePerson{
  
  constructor(name,surname){
    super(name);    // superneeds names for initialization of super class
    this.surname = surname;
    this.address = 'pune'
  }

}
let p2_inheritance = new PersonExample2('abhijeet','shende');
console.log(p2_inheritance)


class PersonExample3 extends BasePerson{
  
  constructor(name){
    super(name);    // superneeds names for initialization of super class

  }
  sayHello(){ 
    
    console.log(`I am from PersonExample3 not from BasePerson`);
    super.sayHello(); // to call base person class method use super
  }
  
}
let p3_inheritance = new PersonExample3('abhijeet','shende');
console.log(p3_inheritance.sayHello())


/**
 * Static Method
 * to call method without instantiting
 */

class staticClassExample{
  static sayHello(){
    console.log(`hello I am a Static Method`);
  }

}

console.log(staticClassExample.sayHello());


/**
 * 
 * GETTER SETTER
 */

class baseClass2{
  constructor(name){
    this._name =name;
  }
  get name(){
    return this._name.toUpperCase();
  }
  set name(name){
    this._name =name+ ' Updated' 
  }
}

let gs = new baseClass2('abhijeet')
console.log(gs.name);
gs.name = 'Shende'
console.log(gs.name);
