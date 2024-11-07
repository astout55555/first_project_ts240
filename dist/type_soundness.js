"use strict";
// 1
// example 1
let x = "Launch School";
const y = x;
console.log(y);
// example 2
let xx = "Launch School";
const yy = xx;
function isNumber(variable) {
    return typeof variable === 'number'; // JavaScript type value, not TypeScript type
    // return Number(variable) === variable; // also works
}
if (isNumber(y)) {
    let z = y; // no longer need to declare type explicitly
    console.log(`${y} is a number, and so is ${z}!`);
}
else {
    console.log(`${y} is not a number.`);
}
;
if (isNumber(yy)) {
    let zz = yy;
    console.log(`${yy} is a number, and so is ${zz}!`);
}
else {
    console.log(`${yy} is not a number.`);
}
;
// 2
function safeGet(array, index) {
    if (array.length > index && index >= 0) {
        return array[index];
    }
    else {
        return undefined;
    }
}
const names = ["John", "Jane"];
const thirdName = safeGet(names, 2); // Should return undefined
console.log(thirdName);
const numbers = [1, 2, 3];
const number = safeGet(numbers, 1); // Should return 2
console.log(number);
