/**
 * 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
 */

function numberOfOccurences(s) {
    const freq = new Map()
    s.split('').forEach(c => {
        if (freq.has(c)) freq.set(c, freq.get(c)+1)
        else freq.set(c, 1)
    })
    return JSON.stringify([...freq.entries()])
}


console.log("Output: " + numberOfOccurences("iamironman"))
console.log("Output: " + numberOfOccurences("eenie meenie minee mo"))
console.log("Output: " + numberOfOccurences("aaabbbcccddd"))