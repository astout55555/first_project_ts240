"use strict";
// Generic function to create an array of repeated elements
function createArray(element, length) {
    return Array.from({ length }, () => element);
}
const numberArray = createArray(5, 3); // Output: [5, 5, 5] - inferred type: number[]
const stringArray = createArray("hi", 2); // Output: ["hi", "hi"] - inferred type: string[]
