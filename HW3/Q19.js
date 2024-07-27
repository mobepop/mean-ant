/**
 * 19. Write a JavaScript function that returns array elements larger than a number.
 */

function largerElements(arr, target) {
    return arr.filter(num => num > target)
}

console.log("Output: " + largerElements([1,2,3,4,5,6,7,8,9], 5))
console.log("Output: " + largerElements([1,2,3,4,5,6,7,8,9], 10))
console.log("Output: " + largerElements([1,2,3,4,5,6,7,8,9], 1))