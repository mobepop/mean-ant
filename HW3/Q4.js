/**
 * Q4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
    Example string: 'webmaster'
    Expected Output: 'abeemrstw'
    Assume punctuation and numbers symbols are not included in the passed string.
 */

function alphabeticalSort(str) {
    return str.split('').sort().join('')
}

console.log("Output: " + alphabeticalSort("webmaster") + "\t Expected: " + "abeemrstw");
console.log("Output: " + alphabeticalSort("hgfedcba") + "\t Expected: " + "abcdefgh");
console.log("Output: " + alphabeticalSort("") + "\t Expected: " + "");
console.log("Output: " + alphabeticalSort("ababababa") + "\t Expected: " + "aaaaabbbb");