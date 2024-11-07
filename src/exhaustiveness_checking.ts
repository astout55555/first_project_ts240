// type Elephant = {
//   kind: "elephant";
//   weight: number;
// };

// type Tiger = {
//   kind: "tiger";
//   speed: number;
// };

// type Peacock = {
//   kind: "peacock";
//   featherLength: number;
// };

// type Giraffe = {
//   kind: 'giraffe';
//   neckLength: number;
// };

// type Animal = Elephant | Tiger | Peacock | Giraffe;

// function describeAnimal(animal: Animal): string {
//   switch (animal.kind) {
//     case 'elephant':
//       return `An elephant weighs ${animal.weight} kg.`;
//       break;
//     case 'tiger':
//       return `A tiger sprints at ${animal.speed} kph.`;
//       break;
//     case 'peacock':
//       return `A peacock has feathers ${animal.featherLength} cm long.`;
//       break;
//     default:
//       const _exhaustivenessCheck: never = animal; // type error
//       throw new Error(`Unknown animal: ${JSON.stringify(_exhaustivenessCheck)}`); // runtime error
//   }
// }

// describeAnimal({kind: 'giraffe', neckLength: 400});
