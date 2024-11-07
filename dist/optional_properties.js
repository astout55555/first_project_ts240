"use strict";
// // if we want to exclude the excluded values:
// function displayUserInfo(userInfo: UserInfo): string {
//   let displayMessage = `User Info -- name: ${userInfo.name}`;
//   if (userInfo.email !== undefined) {
//     displayMessage += `; email: ${userInfo.email}`;
//   }
//   if (userInfo.age !== undefined) {
//     displayMessage += `; age: ${userInfo.age}`;
//   }
//   return displayMessage;
// }
// if we want a default value returned for excluded values:
function displayUserInfo(userInfo) {
    const email = userInfo.email ? userInfo.email : "N/A";
    const age = userInfo.age ? userInfo.age : "unknown";
    return `Name: ${userInfo.name}, Email: ${email}, Age: ${age}`;
}
let newUser = { name: 'John', age: 32 };
console.log(displayUserInfo(newUser));
