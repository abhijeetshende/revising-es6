const person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'running', 'writing'],
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY'
    },
    hello:function(){
        console.log('helloworld')
    }
  };
 let person1 = {
    age:30,
    name:'abhijeet'
 }

 let person2 = new Object();
 person2.age = 30;
 person2.name = 'abhijeet'


 console.log(person1)
 console.log(person2)


 // as objects are point to different memory locations
 //hence not equal
 console.log(person1 === person2)


 // if create obj with no inheritence

 var person_without_inheritance = Object.create(null);
 person_without_inheritance.name="person_without_inheritance";
 console.log(person_without_inheritance);


 
 // if create obj with  inheritence

 var person_with_inheritance = Object.create(person1);
 person_with_inheritance.name="person_with_inheritance";
 /**
  * {name: 'person_with_inheritance'}
    name : "person_with_inheritance"
   [[Prototype]]:  Object age : 30 name: "abhijeet"[[Prototype]]: Object  
  * 
  */
 console.log(person_with_inheritance);

// printing the inherited values
 console.log(person_with_inheritance.__proto__);

 // if we want any functions to be availble for all the objects
 Object.prototype.mycustomfunction = function(){
    console.log('hello from mycustom function')
 }
 person_with_inheritance.mycustomfunction();

 