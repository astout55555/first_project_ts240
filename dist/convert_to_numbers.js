"use strict";
function convertToNumbers(arr) {
    return arr.map((stringNum) => Number(stringNum));
}
const numbersInStringFormat = ["10", "20", "30", "40"];
console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]
