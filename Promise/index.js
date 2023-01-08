let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promisresolve");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promisresolve");
  }, 2000);
});

let p = Promise.all([promise, promise2]);
p.then((res) => console.log(res)).catch((err) => {
  console.log(err);
});

let p2 = Promise.all([promise, promise3]);
p2.then((res) => console.log(res)).catch((err) => {
  console.log("error", err);
});

let p3 = Promise.race([promise, promise2]);
p3
.then((res) => 
  console.log("race win",res)
)
.catch((err) => {
  console.log("error", err);
});
