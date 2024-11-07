// Interface Evolution

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

let newGuy: Employee = {
  name: 'Frank',
  age: 73,
  employeeId: 12345,
};

console.log(newGuy);

// Intersection Expedition

interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

type Pet = Dog & Cat;

let catDog: Pet = {
  bark: () => console.log('Woof'),
  meow: () => console.log('Meow'),
}

catDog.bark();
catDog.meow();

// Signature Secrets

interface StringMap {
  [index: string]: string;
}

let dictionary: StringMap = {
  'argue': 'This is the definition of argue.',
  'rebut': "No it isn't!",
};

// LS demonstration of achieving same result with use of utility type `Record`
const dictionaryLS: Record<string, string> = {
  hello: "world",
  goodbye: "moon",
};

// Keys to the Kingdom

interface UserData {
  name: string;
  age: number;
  email: string;
  isOnline?: boolean;
}

type UserKeys = keyof UserData;

function printUserDataField(userData: UserData, key: UserKeys): void {
  if (userData[key]) {
    console.log(userData[key]);
  }
}

const userData: UserData = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

printUserDataField(userData, "name");
// Output should be "Alice"
printUserDataField(userData, "age");
// Output should be 25


// Constrained Creation

// my first solution:
// using keyof operator multiple times rather than defining a new generic type `K`
function getProperty<T>(property: keyof T, obj: T): T[typeof property] {
  return obj[property];
}

interface TestObj {
  test: string;
  testing: number[];
  num: number;
}

let testObj: TestObj = {
  test: 'test',
  testing: [1, 2, 3],
  num: 1,
};

// manually passing in type argument when invoking function
console.log(getProperty<UserData>('email', userData));
console.log(getProperty<TestObj>('num', testObj));

// these raise type errors:
// console.log(getProperty<UserData>('nonKey', userData));
// console.log(getProperty<TestObj>('fakeKey', testObj));

// LS solution
// `extends` defines type K here as the return of `keyof T`
function getPropertyLS<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { // type is infered using the literal object type
  name: "John",
  age: 30,
};

const userName = getPropertyLS(user, "name");
// Works, "name" is a key of user
const userAge = getPropertyLS(user, "age");
// Works, "age" is a key of user
// const userZip = getProperty(user, "zip");
// Error, "zip" is not a key of user

console.log(userName);
// Output should be "John"
console.log(userAge);
// Output should be 30
