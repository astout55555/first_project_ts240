// // without union types:
// function concatenateStrings(a: string, b: string): string {
//   return a + b;
// }

// function addNumbers(a: number, b: number): number {
//   return a + b;
// }

// const result = concatenateStrings("Hello", "World");
// const numericResult = addNumbers(1, 2);

// // with union types:
// type Combinable = number | string;

// function combine(a: Combinable, b: Combinable): Combinable {
//   if (typeof a === 'string' && typeof b === 'string') {
//     return a + b;
//   } else if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   } else {
//     return 'A and B are different types!';
//   }
// }

// const concatenated = combine("Hello, ", "World!"); // Returns "Hello, World!"
// const added = combine(5, 10); // Returns 15

// console.log(concatenated);
// console.log(added);

// with function overloads (and union types):
function combine(input1: string, input2: string): string;
function combine(input1: number, input2: number): number;
function combine(
  input1: string | number,
  input2: string | number
): string | number {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.concat(input2);
  } else if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    throw new Error(
      "Invalid input types: both inputs must be strings or both inputs must be numbers."
    );
  }
}

// with function overloads, assigning to narrow types no longer raises errors
const concatenated: string = combine("Hello, ", "World!");
const added: number = combine(5, 10);
