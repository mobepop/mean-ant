/**
 * 27. Write a JavaScript function that returns the longest palindrome in a given string.
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

 */

function longestPalindromeInSubstring(s) {
    let n = s.length;
    let maxLength = 1;
    let start = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let flag = true;
            for (let k = 0; k < (j - i + 1) / 2; k++) {
                if (s[i + k] !== s[j - k]) {
                    flag = false;
                    break;
                }
            }
            if (flag && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
    let ans = s.substring(start, start + maxLength);
    return ans;
}

console.log("Output: " + longestPalindromeInSubstring('bananas'))
console.log("Output: " + longestPalindromeInSubstring('abracadabra'))