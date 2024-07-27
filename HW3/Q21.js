/**
 *21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
    Sample array: [1, 2, 3] and subset length is 2
    Expected output: [[2, 1], [3, 1], [3, 2]]

 */

function subsetGenerator(arr, len) {
    const res = [];

    // check edge cases
    if (len === arr.length || len <= 0) return [];

    // recursive function
    function subset(start, currentSubset) {
        // terminate condition
        if (currentSubset.length === len) {
            res.push([...currentSubset])
            return;
        }

        for (let i = start; i < arr.length; ++i) {
            currentSubset.push(arr[i]);
            subset(i + 1, currentSubset);
            currentSubset.pop();
        }
    }

    subset(0, [])
    return res
}

console.log("Output: " + subsetGenerator([1,2,3], 2))