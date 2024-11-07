"use strict";
// interface CustomObject {
//   [key: string]: unknown;
// }
// // refactored with generics to automatically infer type of returned prop
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }
// const object = {
//   name: "John",
//   age: 30,
// };
// const xxx = getProperty(object, "name");
// const yyy = getProperty(object, "age");
