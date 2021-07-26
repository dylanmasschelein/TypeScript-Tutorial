//Interfaces
// DESCRIBES the structure of an object
// Type checking for objects that MUST have a specific structure
// Can only be used to describe a structure of an OBJECT
// Must more rigid, has to be an object
// You can implement an interface in a class!

// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// type is more flexible, can also store unions etc in them...
// type Person = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// };

// let user1: Person;

// user1 = {
//   name: "Dylan",
//   age: 28,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hi there, I am");

// // ----------------------------
// type AddFn = (a: number, b: number) => number; --- bit more common to use a type rather than interface in this situation!
interface AddFn {
  // Another way to declare the function type
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string; // readonly can also be used with a type if you want -- can only be set once
  outputName?: string; // Dont want to force this property?? -- add a "?" to make the property optional
}

interface Greetable {
  greet(phrase: string): void;
}

// Also possible to extends interfaces with other interfaces
// Can alos inherit multiple interfaces -- unlike classes which can only inherit one extended class!

// interface Greetable extends Named, AnotherInterface {
//   greet(phrase: string): void;
// }

// This class should follow the interface
class Person implements Greetable, Named {
  name?: string; // Can also make properties optional in classes!
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user2: Greetable;
// user2.name = "Greg"; -- forced an error because name is set to read only -- cannot be re-assigned
user2 = new Person("Dylan");
// user2.greet();
console.log(user2);
