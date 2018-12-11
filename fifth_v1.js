
const isNumber = num => Number.isInteger(num);
const add = smth => fn => isNumber(fn) ? add(smth += fn) : smth;
  
console.log(add(1)(2)(3));   //fn();
