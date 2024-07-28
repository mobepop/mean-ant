/**
 * 29. Write a JavaScript function to get the function name.
 */

function getFunctionName(func) {
    return func.name
}

function sayHi() {
    console.log("Hello World")
}
function sayBye() {
    console.log("Byeeee")
}

console.log("Output: " + getFunctionName(sayHi))
console.log("Output: " + getFunctionName(sayBye))