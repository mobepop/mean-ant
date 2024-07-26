/**
 * 3. Write a JavaScript function that generates all combinations of a string.
    Example string: 'dog'
    Expected Output: d, do, dog, o, og, g
 */
function combinationGenerator(s) {
    const res = new Set()
    for (let i = 0; i < s.length; ++i) {
        for (let j = i + 1; j <= s.length; ++j) {
            res.add(s.substring(i, j))
        }
    }
    return Array.from(res)
}

console.log("Output: " + combinationGenerator("dog"));
console.log("Output: " + combinationGenerator("dddog"));
console.log("Output: " + combinationGenerator("abcde"));
console.log("Output: " + combinationGenerator("d"));