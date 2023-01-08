let m = new Map();
m.set('1','firstentert');
m.set('2',2);
m.set('1','sendon');

console.log(m);

console.log(m.get('1'));

m.clear();
console.log(m);
m.set('1','firstentert');
m.set('2',2);
m.set('1','sendon');

for (const iterator of m.keys()) {
    console.log(m.get(iterator));
}