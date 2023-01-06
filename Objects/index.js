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


console.log(person,name);
// cannot create object of Person 



let person2 = new Object();
person2.name = 'abhijeet'
console.log(person2.name)