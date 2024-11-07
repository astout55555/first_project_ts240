"use strict";
let obj = new Map([
    [1, "Jane"],
    [2, "30"],
    [3, "female"]
]);
console.log(obj);
console.log(Object.keys(obj).every((key) => typeof key === "number"));
