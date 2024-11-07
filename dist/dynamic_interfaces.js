"use strict";
// Interface Evolution
let newGuy = {
    name: 'Frank',
    age: 73,
    employeeId: 12345,
};
console.log(newGuy);
let catDog = {
    bark: () => console.log('Woof'),
    meow: () => console.log('Meow'),
};
catDog.bark();
catDog.meow();
let dictionary = {
    'argue': 'This is the definition of argue.',
    'rebut': "No it isn't!",
};
// LS demonstration of achieving same result with use of utility type `Record`
const dictionaryLS = {
    hello: "world",
    goodbye: "moon",
};
function printUserDataField(userData, key) {
    if (userData[key]) {
        console.log(userData[key]);
    }
}
const userData = {
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
function getProperty(property, obj) {
    return obj[property];
}
let testObj = {
    test: 'test',
    testing: [1, 2, 3],
    num: 1,
};
// manually passing in type argument when invoking function
console.log(getProperty('email', userData));
console.log(getProperty('num', testObj));
// these raise type errors:
// console.log(getProperty<UserData>('nonKey', userData));
// console.log(getProperty<TestObj>('fakeKey', testObj));
// LS solution
// `extends` defines type K here as the return of `keyof T`
function getPropertyLS(obj, key) {
    return obj[key];
}
const user = {
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
