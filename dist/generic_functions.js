"use strict";
function identity(arg) {
    return arg;
}
function pair(arg1, arg2) {
    return [arg1, arg2];
}
const pairOfNumbers = pair(1, 2); // returns [1, 2]
const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]
console.log(pairOfNumbers);
console.log(pairOfStrings);
