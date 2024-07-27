/**
 *  20. Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
 */

function stringIDGen(len) {
    const sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const res = [len]
    for (let i = 0; i < len; ++i) {
        res[i] = sample.charAt(Math.floor(Math.random() * sample.length))
    }
    return res.join('')
}

console.log("Output: " + stringIDGen(5))
console.log("Output: " + stringIDGen(10))
console.log("Output: " + stringIDGen(25))