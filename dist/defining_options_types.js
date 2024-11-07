"use strict";
// // using nullish operator `??`
// function formatName(options: NameOptions = {}): string {
//   let { firstName, lastName, title } = options;
//   firstName = firstName ?? 'John';
//   lastName = lastName ?? 'Doe';
//   title = title ?? '';
//   return `${title} ${firstName} ${lastName}`.trim();
// }
// providing default values directly in options parameter
function formatName({ firstName = 'John', lastName = 'Doe', title = '' } = {}) {
    return `${title} ${firstName} ${lastName}`.trim();
}
const formattedName = formatName({
    firstName: "Jane",
    lastName: "Smith",
    title: "Dr.",
});
console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe // empty options arg
console.log(formatName()); // John Doe // options arg not provided
