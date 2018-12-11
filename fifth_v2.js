console.clear();

const add = smth => fn => {
const isNumber = num => Number.isInteger(num);
return isNumber(fn) ? add(smth += fn) : smth;
}; 
  
console.log(add(1)(2)(3));   //fn();
console.log(add(1)(2)(3)()); //6
