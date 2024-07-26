/**
 *18. Write a function for searching JavaScript arrays with a binary search.
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
 */

function binarySearch(arr, target) {
    // binary search only works with sorted array
    const sorted_arr = arr.sort((a,b)=> a-b)

    let left = 0
    let right = arr.length
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (target < sorted_arr[mid]) {
            right = mid
        }
        else left = mid + 1
    }
    return left - 1 // return index of target number found in array
}

console.log("Output: " + binarySearch([1,2,3,4,5], 3))
console.log("Output: " + binarySearch([1,2,3,4,5], 2))
console.log("Output: " + binarySearch([5,4,3,3,3,2,1], 4))