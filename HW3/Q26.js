/**
 * 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

 */

function longestSubstringWithoutRepeatingCharacters(s) {
   // sliding windows method
   let begin = 0
   let res = 0
   const seen = new Map()
   for (let i = 0; i < s.length; ++i) {
      // update latest occurence of "begin" index
      if (seen.has(s[i])) {
         begin = Math.max(begin, seen.get(s[i]) + 1)
      }
      res = Math.max(res, i - begin + 1)

      // update this character to Map(), keep the index
      seen.set(s[i], i)
   }
   return res
}

console.log("Output: " + longestSubstringWithoutRepeatingCharacters('abcabc'))
console.log("Output: " + longestSubstringWithoutRepeatingCharacters('cdcdcdcd'))