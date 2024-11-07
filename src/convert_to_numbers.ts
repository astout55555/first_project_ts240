function convertToNumbers(arr: string[]): number[] {
  return arr.map((stringNum) => Number(stringNum));
}

const numbersInStringFormat = ["10", "20", "30", "40"];

console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]
