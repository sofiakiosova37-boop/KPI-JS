'use strict';

const fn = ('object')
{
  console.log('object');
};

module.exports = { fn };

// second 
const fn1 = (obj) => {
  console.log(obj);
};
module.exports = { fn1 };
fn1()

//third


