// 1

// example 1
let x: any = "Launch School";
const y: number = x;
console.log(y);

// example 2
let xx: any = "Launch School";
const yy: number = xx as number;

function isNumber(variable: any): variable is number {
  return typeof variable === 'number'; // JavaScript type value, not TypeScript type
  // return Number(variable) === variable; // also works
}

if (isNumber(y)) {
  let z = y; // no longer need to declare type explicitly
  console.log(`${y} is a number, and so is ${z}!`);
} else {
  console.log(`${y} is not a number.`);
};

if (isNumber(yy)) {
  let zz = yy;
  console.log(`${yy} is a number, and so is ${zz}!`);
} else {
  console.log(`${yy} is not a number.`);
};

// 2

function safeGet<T>(array: T[], index: number): T | undefined {
  if (array.length > index && index >= 0) {
    return array[index];
  } else {
    return undefined;
  }
}

const names: string[] = ["John", "Jane"];
const thirdName = safeGet(names, 2); // Should return undefined
console.log(thirdName);

const numbers: number[] = [1, 2, 3];
const number = safeGet(numbers, 1); // Should return 2
console.log(number);
