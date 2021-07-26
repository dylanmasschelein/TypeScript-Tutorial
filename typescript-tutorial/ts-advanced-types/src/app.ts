// Intersection types
// these "types" could also have been interfaces
type Admin = {
  name: string;
  privilges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {} -- could be done like this if using interfaces

// Combinining both types or interfaces using the "&"
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Dylan",
  privilges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// Also an example of an intersection type!
type Universal = Combinable & Numeric;

// Type Guards
// Cannot use interfaces in type guards because they are not compiled at runtime
function add(a: number, b: number): number; // Function Overload for number!
function add(a: string, b: string): string; // Function Overload for string!
function add(a: number, b: string): string; // Function Overload for mix will be string!
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  // This is called a type guard -- used if you are using unions (values can be more than one type)
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

// Funnction Overload tidbit ---------

const result = add("Dylan", "Masschelein"); // as string; // type casting to tell TS it will be a string, that way you can use split on it
result.split(" "); // best way is to use function overloads located about function declaration!

// End Function overloads ....

// Optional Chaining

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "Developer", description: "Freelancer" },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title); -- JavaScript way of doing this
console.log(fetchedUserData?.job?.title); // TS way of doing it, meaning if whats before the "?" is defined carry on... if not stop

// End Optional Chaining

// Nullish Coalescing ------
// unsure if data is null or undefined ...

const userInput = null; // if you don't know in advance

const storedData = userInput || "Default"; // may be another falsey value - ie - '' or 0...
const storedData2 = userInput ?? "Default"; // Nullish Coalescing  operator - '??' - only checks for 'null' or 'undefined'

console.log(storedData);
console.log(storedData2);

// End Nullish

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privilges" in emp) {
    console.log("Privilges: " + emp.privilges);
  }
  if ("startDate" in emp) {
    console.log("Start date: " + emp.startDate);
  }
}

printEmployeeInfo(e1);

class Car {
  drive() {
    console.log("driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();

const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   if ("loadCargo" in vehicle) {
  //     vehicle.loadCargo(1000);
  //   }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions
// Pattern when implementing unions - specifically objects
// Adding an extra property to each interface such as the "type" in below interfaces allows to use switch statement
// One common property in each interface so we have a way to discriminate and accuratley type check

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  //   if ("flyingSpeed" in animal) {
  //     console.log("Moving with speed: " + animal.flyingSpeed);
  //   }
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// Type Casting
// <Element type following angle brackets! <Element Type>...
// Or for React... Element... as "element type"

// the "!" means the expression will never yeild null such as HTMLElements
// Alternative is to use an if statement

// const userInputElement = <HTMLInputElement>( // works fine and can use this...
//   document.getElementById("userInput")!
// );

const userInputElement = document.getElementById(
  "userInput"
)! as HTMLInputElement; // This is what needs to be used in React!!!!

userInputElement.value = "Hi There!";

// Index Types

// Want this to be flexible to use on any form on the webpage
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character' }
  [prop: string]: string;
}

// Dont need to know the 'Key' type in the interface or how many 'keys' we will need using the Error Container property syntax!
const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Not a valid username",
};
