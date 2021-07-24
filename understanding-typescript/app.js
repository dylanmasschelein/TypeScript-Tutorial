function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// Accepts any function that takes 2 parameters and returns a number
var combineValues;
combineValues = add;
// combineValues = printResult; - only declares it as a function so this workds
// combineValues = 5; - not a function
console.log(combineValues(8, 8));
// let someValue: undefined;
