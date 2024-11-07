"use strict";
const customArray = ["apple", 42, "banana"];
// my initial solution
function processCustomArray(arr) {
    let array = [].slice.call(arr);
    let stringsOnly = array.filter(element => typeof element === 'string');
    return stringsOnly.map(string => string.toUpperCase());
}
// solution from LS - doesn't quite match prompt, might be changed soon
function processCustomArray2(arr) {
    if (Array.isArray(arr)) { // sets the type of `arr` to an Array
        return arr
            .filter((element) => typeof element === "string") // type is string[]
            .map((element) => element.toUpperCase()); // returns string[]
    } // LS solution does not define a custom `ProcessedArray` type
    return [];
}
console.log(processCustomArray(customArray));
console.log(processCustomArray2(customArray));
