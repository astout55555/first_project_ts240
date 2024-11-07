// Typing Away

let stringValue: string = "Hello world!"
let numVal: number = 42;
let boolVal: boolean = true;

// Array Tango

let colors: string[] = ['red', 'white', 'black', 'scarlet', 'etc.'];

// Function Junction

function greet(name: string, age: number): string {
  return `Hello, your name is ${name}, and you are ${age} years old.`
}

console.log(greet('Josh', 2));

// Methodical Madness

function toUpperCaseArray(arr: string[]): string[] {
  return arr.map(string => string.toUpperCase());
}

console.log(toUpperCaseArray(['hello', 'world']));

// Enter the Void

function logMessage(message: string): void {
  console.log(message);
}

logMessage('hello everybody!');

// Literal Thinking

type Direction = 'left' | 'right' | 'up' | 'down';

let move: Direction = 'up';
// move = 'North'; // type error

// Guessing Game

let userID = 7;
// userID = 'seven'; // type error
