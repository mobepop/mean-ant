/**
 * 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
 */
function identityMatrix(rows, columns) {
    const matrix = []
    for (let i = 0; i < rows; ++i) {
        const row = []
        for (let j = 0; j < columns; ++j) {
            if (i === j) row.push(1)
            else row.push(0)
        }
        matrix.push(row)
    }
    return matrix
}

console.log("Output: " + identityMatrix(3,3))
console.log("Output: " + identityMatrix(4,4))
console.log("Output: " + identityMatrix(5,5))
console.log("Output: " + identityMatrix(10,10))