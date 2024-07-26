/**
 * 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
 */

function baseNumber(base, n) {
    let res = base
    for (let i = 1; i < n; ++i) {
        res *= base
    }
    return res
}

console.log("Output: " + baseNumber(2,2))
console.log("Output: " + baseNumber(5,3))
console.log("Output: " + baseNumber(3,3))
console.log("Output: " + baseNumber(12,2))