var a = 10;
try {
  var c = a * b;
  console.log(c);

} catch (error) {
  console.log('in try in catch ');

  console.log(error);
} finally{
  console.log('in finally block');
}

var x = 10;
console.log(x);
