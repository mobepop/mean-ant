/**
 * 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
    Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */

function isPrime(num) {
    if (num <= 1 || !Number.isInteger(num)) return false
    for (let i = 2; i <= Math.sqrt(num); ++i) {
        if (num % i ===0) return false
    }
    return true
}
console.log("Output: " + isPrime(1));
console.log("Output: " + isPrime(2));
console.log("Output: " + isPrime(3));
console.log("Output: " + isPrime(4));
console.log("Output: " + isPrime(5));
console.log("Output: " + isPrime(11));
console.log("Output: " + isPrime(13));
