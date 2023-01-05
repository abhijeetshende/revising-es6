let array = [1,2,4,5,6,7,7,8,"q"];

for (const iterator of array) {
    printToScreen(iterator);
}
printToScreen("**********************************************************")
const person = {
    name: 'John Smith',
    age: 30,
    location: 'New York',
    hobbies: ['programming', 'reading', 'running']
  };

  for (const key in person) {
    printToScreen(person[key]);
    if(key == 'hobbies'){
        for (const iterator of person[key]) {
            printToScreen(iterator)
        }
    }
  }