/**
 * 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
    A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 */
function isPalindrome(s) {
    let word = s.replace(/\s+/g, '').toLowerCase()
    return word === word.split('').reverse().join('')
}

console.log("Output: " + isPalindrome("racecar") + "\t Expected: True");
console.log("Output: " + isPalindrome("madam") + "\t Expected: True");
console.log("Output: " + isPalindrome("nurses run") + "\t Expected: True");
console.log("Output: " + isPalindrome("abcd") + "\t Expected: False");