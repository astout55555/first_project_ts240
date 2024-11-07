"use strict";
// United Types
function wrapInArray(toWrap) {
    return [toWrap];
}
console.log(wrapInArray('hello'));
console.log(wrapInArray(100));
// Guard Duty
function printID(id) {
    if (typeof id === 'string') {
        console.log('Your ID is a string');
    }
    else {
        console.log('Your ID is a number');
    }
}
printID(101);
printID('202');
// Generic Genius
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement(['a', 'b', 'c']));
console.log(firstElement([1, 2, 3]));
console.log(firstElement([]));
let entry = {
    key: 'age',
    value: 30,
};
// Generics in Arrays
// // my og solution, using `Array<unknown>`, then overriding type checking with
// // a type assertion after filtering with a type predicate function to confirm
// function filterByType<T>(arr: Array<unknown>, typeName: string): T[] {
//   let results = [];
//   results = arr.filter(element => isType(element, typeName));
//   return results as T[];
// }
// // kind of useless function, honestly--only works with types that have a valid
// // `typeof` string value, so using it with a generic and type predicate doesn't
// // add any functionality compared to just using the body of the function
// function isType<T>(value: unknown, typeName: string): value is T {
//   return typeof value === typeName;
// }
// LS solution: uses `any[]`, turning off type checking for the array,
// but using essentially the same logic to ensure type safety
function filterByType(arr, type) {
    return arr.filter((item) => typeof item === type);
}
console.log(filterByType(["hello", "world", 42, true], "string"));
