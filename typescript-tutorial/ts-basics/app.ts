//Unkown Type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Dyl";
if (typeof userInput === "string") {
  userName = userInput;
}

// Never Type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occured", 500);
console.log(result);
