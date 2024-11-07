"use strict";
// Narrow Paths
function printLength(value) {
    if (typeof value === 'string') {
        console.log(`String length: ${value.length}`);
    }
    else if (Array.isArray(value)) {
        console.log(`Array length: ${value.length}`);
    }
}
printLength('hello');
printLength(['hello', 'world']);
// Truth Seekers
function isStringArray(arr) {
    return arr.every((item) => typeof item === "string");
}
console.log(isStringArray([1, 2, 3]));
console.log(isStringArray(["test", "string"]));
// Savvy Shortcuts
function shortCircuitGuard(value) {
    value && console.log('Input is defined and not empty.');
}
shortCircuitGuard('');
shortCircuitGuard(undefined);
shortCircuitGuard('test');
// function getArea(shape: Shape): number {
//   if (shape.kind === 'circle') {
//     return Math.PI * shape.radius**2;
//   } else {
//     return shape.sideLength**2;
//   }
// }
// let testCircle: Circle = {
//   kind: 'circle',
//   radius: 10,
// };
// console.log(getArea(testCircle));
// console.log(getArea({kind: 'square', sideLength: 10}));
// The Checker's Challenge
function assertNever(value) {
    throw Error('Wow, this never happens!'); // can use it as an exhaustiveness check
}
function getArea(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === 'square') {
        return Math.pow(shape.sideLength, 2);
    }
    else {
        // const _exhaustivenessCheck: never = shape; // not needed with the function
        return assertNever(shape); // passing arg to never type param will raise error
    }
}
// Embracing the Unknown
function logUnknown(value) {
    if (typeof value === 'string') {
        console.log(value);
    }
}
logUnknown(2);
logUnknown(undefined);
logUnknown(null);
logUnknown('test value');
logUnknown(true);
