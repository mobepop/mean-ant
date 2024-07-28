/**
 * 24. Write a JavaScript function to apply Bubble Sort algorithm.
 */

function bubbleSort(arr) {
    const n = arr.length
    for (let i = 0; i < n-1; ++i) {
        let swapped = false

        for (let j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            swapped = true
            }

        }
        if (!swapped) break
    }
    return arr
}

console.log("Output: " + bubbleSort([9,8,1,2,3,4,5,8,6,4,1]))
console.log("Output: " + bubbleSort([5,6,7,84,4,4,4,1,1,1,1]))
console.log("Output: " + bubbleSort([]))
console.log("Output: " + bubbleSort([100,1]))