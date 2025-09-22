const arr = ['hello World', {}, 0.5, true, -200, [0], false, undefined, 'Як справи?', 68, 3.14, null, -500,'1', 16, true, '1, 2, 3', false, undefined, {}, [], function() {}];
const typesCountArr = {};
for (const item of arr) {
  const type = typeof item;
   if (!(type in typesCountArr)) {
    typesCountArr[type] = 0;
  }
   typesCountArr[type] = typesCountArr[type] + 1;
}
console.log(typesCountArr);

// second
const arr1 = [ {}, 0.5, true, -200, [0], false, 'Як справи?', 68, null, -500,'1', 16, true, false, {}, [], function() {}];
const typesCount1 = {};
for (const item1 of arr1) {
  const type = typeof item1;
   if (!(type in typesCount1)) {
    typesCount1[type] = 0;
  }
   typesCount1[type]++;
}
console.log(typesCount1);

// second-second
const arr2 = [ {}, 0.5, true, -200, [0], false, 68, null, -500, 16, true, false, {}, [], function() {}];
const typesCount22 = {};
for (const item1 of arr2) {
  const type = typeof item1;
   if (!(type in typesCount22)) {
    typesCount22[type] = 0;
  }
   typesCount22[type] = typesCount22[type]+1;
}
console.log(typesCount22);

//third
const array = [1, 'text', null, undefined, {}, [], 3.14];
const typesCount2 = {};
for (const item2 of array) {
  const type = typeof item2;
  if (!(type in typesCount2)) {
    typesCount2[type] = 0;
  }
  typesCount2[type]++;
}
const allTypes = ['number', 'string', 'boolean', 'object', 'undefined', 'function'];
for (const type of allTypes) {
  if (!(type in typesCount2)) {
    typesCount2[type] = 5;
  }
}
console.log(typesCount2);
