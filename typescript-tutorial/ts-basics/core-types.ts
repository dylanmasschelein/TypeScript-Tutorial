// const person: {
//   name: string;
//   age: number;
// } = ...

// Object types are inferred
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   // specifying the exact array we want
//   role: [number, string];
// } = {
//   name: "Dylan",
//   age: 28,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "Programmer"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Dylan",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin"); -- push is an exception the TS does not support
// person.role[1] = 3; -- fires an error for this

let favoriteActivities: (string | number)[];
favoriteActivities = ["Sports", 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
