"use strict";
// interface Dog {
//   kind: 'dog',
//   name: string,
//   age: number,  
// };
// interface Bird {
//   kind: 'bird',
//   name: string,
//   wingspan: number,
// };
// type Animal = Dog | Bird;
// function describeAnimal(animal: Animal): string {
//   // implementation for function
//   switch (animal.kind) {
//     case 'dog':
//       let years = animal.age > 1 ? 'years' : 'year'
//       return `${animal.name} is a ${animal.age} ${years} old dog.`;
//       break;
//     case 'bird':
//       return `${animal.name} is a bird with a ${animal.wingspan} cm wingspan.`;
//       break;
//     default:
//       throw new Error('This should never run.');
//   }
// }
// let fido: Dog = {kind: 'dog', name: 'Fido', age: 7};
// let tweety: Bird = {kind: 'bird', name: 'Tweety', wingspan: 8};
// console.log(describeAnimal(fido));
// console.log('---------------');
// console.log(describeAnimal(tweety));
