//Unkown Type
var userInput;
var userName;
userInput = 5;
userInput = "Dyl";
if (typeof userInput === "string") {
    userName = userInput;
}
// Never Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occured", 500);
console.log(result);
