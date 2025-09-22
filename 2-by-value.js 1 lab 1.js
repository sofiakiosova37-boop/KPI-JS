'use strict';

const fn = (n) => {
   return n + 4;
};
const a = 15;
const b = fn(a);
console.dir({ a, b }); 

module.exports = { fn };

// second 
const fn2 = (p) => {
   return p + 10;
};

const a1 = 8;
const b1 = fn2(a1);
console.dir({ a1, b1 }); 

module.exports = { fn2 };