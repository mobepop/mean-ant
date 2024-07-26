/**
 * Question 1. Write a JavaScript function that reverse a number.
    Example x = 32243;
    Expected Output: 34223
 */
function reverseNumber(num) {
    return Number(num.toString().split('').reverse().join(''))
}

console.log("Output: " + reverseNumber(32243) + "\t Expected: " + 34223);
console.log("Output: " + reverseNumber(10) + "\t Expected: " + 1);
console.log("Output: " + reverseNumber(123456) + "\t Expected: " + 654321);
