"use strict";
// // Alias Architects
// type Contact = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   isOnline: boolean;
// }
// const contact: Contact = {
//   firstName: "Jane",
//   lastName: "Doe",
//   age: 30,
//   isOnline: true,
// };
// Object Outlines
let employee = {
    id: 7,
    name: 'George',
    department: 'Applied Coolness',
};
let myCar = {
    make: 'Honda',
    model: 'Fit',
    year: 2011,
};
let computer = {
    manufacturer: 'HP',
    model: 'Lappy',
    year: 2005,
};
let smartphone = {
    manufacturer: 'Google',
    model: 'Pixel 6',
    year: 2020,
    hasHeadphoneJack: false,
};
let anotherSmartphone = smartphone; // structurally compatible with Device
const contact = {
    firstName: "Jane",
    lastName: "Doe",
    isOnline: true,
}; // age not provided, optional
const userAccount = {
    username: "johndoe123",
    email: "john@example.com",
    accountCreationDate: "2023-01-01",
};
// Attempt to modify the readonly property should result in an error
// userAccount.accountCreationDate = '2023-02-01';
// Error: Cannot assign to 'accountCreationDate' because it is a read-only property.
// Confident Casting
let randomValue = 'hello world';
console.log(randomValue.toUpperCase());
// // Class Templates
// class Person {
//   // name: string; // type annotations not necessary if using public keyword.
//   // age: number; // otherwise, needed here in addition to in parameters list
//   constructor(public name: string, public age: number) {
//     // this.name = name; // property with same name as param automatically created.
//     // this.age = age; // can use public keyword instead of simple assignments
//   }
//   describe() {
//     return `${this.name} is ${this.age} years old.`;
//   }
// }
// const person = new Person("Alice", 30);
// console.log(person.describe());
// // Expected Output:
// // Alice is 30 years old.
