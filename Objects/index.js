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