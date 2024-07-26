/**
 * 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
    Example string: 'The quick brown fox'
    Expected Output: 5
 */

function countVowels(s) {
    const vowels = new Set(["u", "e", "o", "a", "i"])
    return s.split('').reduce((count, c) => vowels.has(c.toLowerCase())? count + 1 : count, 0)
}
console.log("Output: " + countVowels("the quick brown fox"));
console.log("Output: " + countVowels("Blade"));
console.log("Output: " + countVowels("Hold my beer"));
console.log("Output: " + countVowels("dbctyhgr"));
