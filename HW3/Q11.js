/**
 * 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
    Sample array: [1,2,3,4,5]
    Expected Output: 2,4
 */
function secondPlace(arr) {
    // case given array less than 2 items
    if (arr.length < 2) return []

    const sorted_list = [...new Set(arr)].sort((a, b) => a - b)
    // case sorted array greater than 2 items
    if (sorted_list.length >= 2)
        return [sorted_list[1], sorted_list[sorted_list.length-2]]
    else
        return [arr[0], arr[0]]
}

console.log("Output: " + secondPlace([1,2,3,4,5]))
console.log("Output: " + secondPlace([1,3,98,99,100]))
console.log("Output: " + secondPlace([10,9,9,7,6,5,3,4,3,2]))