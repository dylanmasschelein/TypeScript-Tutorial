// Generics ***
// Help get additional type info
// Gives us flexibility along with type saftey
// Provides full type support with functions and classes

// const names: any[] = [];
// const names: Array<string> = []; // string[] - same/same - use unions in here or whatever you need as well
// names[0].split(" "); // Array knows it holds strings

// const promise: Promise<number> = new Promise((res, _rej) => {
//   setTimeout(() => {
//     res(10);
//   }, 2000);
// });

// promise.then((data) => { // has no information about the type becuaase its not specified
//   data.split(" ");
// });

// Creating our own Generic types ***
// function merge<T, U>(objA: T, objB: U) {
//   // T and U just specifies that they could be different types
//   return Object.assign(objA, objB);
// }

// const mergeObj = merge({ name: "Dylan", hobbies: ["Sprots"] }, { age: 28 });

// // const mergeObj = merge<{ name: string; hobbies: string[] }, { age: number }>( // this is what generics do but this specifcally is not needed as TS inferes the values!
// //   { name: "Dylan", hobbies: ["Sprots"] },
// //   { age: 28 }
// // );

// const mergeObj2 = merge({ name: "Dylan" }, { age: 28 });

// console.log(mergeObj.age);
// console.log(mergeObj2.name);

// Generics constraints ****
// specifies that parameter will need to be objects but doesnt matter teh key: value pairs!

function merge<T extends object, U extends object>(objA: T, objB: U) {
  // garentee we get objects
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Dylan", hobbies: ["Sprots"] }, { age: 28 });
console.log(mergeObj);

// Another Generic Function ***

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descText = "Got no value";
  if (element.length === 1) {
    descText = `Got ${element.length} element`;
  } else if (element.length > 1) {
    descText = `Got ${element.length} elements`;
  }
  return [element, descText];
}

console.log(countAndDescribe(["sports", "cooking"]));

// The "keyof" Constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Dylan" }, "name"));

// Generic Classes ****

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Dylan");
textStorage.addItem("Chris");
textStorage.removeItem("Dylan");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

type Combine = string | number;
const textAndNumberStorage = new DataStorage<Combine>();

// Object would need a new dataStorage type/structure

// const objStorage = new DataStorage<object>();
// const dylanObj = { name: "Dylan" };
// objStorage.addItem({ name: "Dylan" });
// objStorage.addItem({ name: "Chris" });

// objStorage.removeItem(dylanObj);

// console.log(objStorage.getItems());

//  Generic Utility Types ****
// Many more - checkout docs on these

// Partial Type
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonly Type

const names: Readonly<string[]> = ["Dylan", "Anna"];
// Readonly wont allow manipulations to happen on an array/object etc...
// names.push("Chris");
// names.pop();
