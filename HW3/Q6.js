/**
 * 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
    Example string: 'Web Development Tutorial'
    Expected Output: 'Development'
 */

function longestWord(s) {
    let new_s = s.split(' ')
    let longest_word = ''
    for (let item of new_s) {
        longest_word = (item.length > longest_word.length)? item : longest_word
    }
    return longest_word
}

console.log("Output: " + longestWord("Web Development Tutorial"));
console.log("Output: " + longestWord("The Quick Brown Fox"));
console.log("Output: " + longestWord("I am inevitable"));
console.log("Output: " + longestWord("I am ironman"));
