// interface Animal { // declared interfaces can be `implemented` by compatible classes
//   name: string;

//   makeSound(): string;
// }

// // a class declaration creates both a constructor function and a a type declaration
// class Animal implements Animal { // `implements Animal` is unnecessary here
//   constructor(name: string) {
//     this.name = name;
//   }

//   makeSound() {
//     return "Generic animal sound";
//   }
// } // a class with the same name as the interface will be merged automatically

// interface Dog extends Animal {
//   fetch(): string;
// };

// class Dog extends Animal { // `implements Dog` is dropped, no errors raised
//   constructor(name: string) {
//     super(name);
//   }

//   fetch() { // could have written this as `fetch(): string` instead of
//     return `${this.name} fetches a stick.`; // declaring interface Dog above
//   }
// }

// const myDog = new Dog("Rex");
// console.log(myDog.fetch());
