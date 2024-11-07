"use strict";
function isNumericArray(input) {
    return Array.isArray(input) &&
        input.filter(ele => typeof ele === 'number').length === input.length;
}
function processInput(input) {
    // Your implementation here
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    }
    else if (typeof input === 'number') {
        console.log(input.toFixed(2));
    }
    else if (isNumericArray(input)) {
        console.log(input.length);
    }
    else {
        const _exhaustivenessCheck = input;
        throw new Error(`Bad input: ${JSON.stringify(_exhaustivenessCheck)}`);
    }
}
processInput("hello"); // Outputs: HELLO
processInput(42); // Outputs: 42.00
processInput([1, 2, 3]); // Outputs: 3
