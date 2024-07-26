/**
 * 13. Write a JavaScript function to compute the factors of a positive integer.
 */

function computeFactors(num) {
    const res = []
    for (let i = 1; i <= num/2; ++i) {
        if (num % i === 0) res.push(i)
    }
    res.push(num)
    return res
}

console.log("Output: " + computeFactors(1))
console.log("Output: " + computeFactors(4))
console.log("Output: " + computeFactors(5))
console.log("Output: " + computeFactors(15))
console.log("Output: " + computeFactors(20))