/**
 * 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
    Sample arguments: 'microsoft.com', 'o'
    Expected output: 3

 */

function occurenceCount(s, letter) {
   return s.split('').filter( c => c.toLowerCase() == letter).length
}

console.log("Output: " + occurenceCount('microsoft.com', 'o'))
console.log("Output: " + occurenceCount('Doctor Von Doom', 'o'))
console.log("Output: " + occurenceCount('Google', 'o'))
console.log("Output: " + occurenceCount('Netflix', 'o'))