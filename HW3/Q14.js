/**
 *14. Write a JavaScript function to convert an amount to coins.
    Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
    Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
    Output: 25, 10, 10, 1
 */

function amountToCoints(amount, coins) {
    const res = []
    const sorted_coins = coins.sort((a, b) => b-a)
    let i = 0
    while (amount != 0) {
        if (amount - sorted_coins[i] >= 0) {
            amount -= sorted_coins[i]
            res.push(sorted_coins[i])
        }
        else i++
    }
    return res
}

console.log("Output: " + amountToCoints(46, [25,10,5,2,1]))
console.log("Output: " + amountToCoints(10, [5,3,2,1]))
console.log("Output: " + amountToCoints(150, [25,10,5,1]))
console.log("Output: " + amountToCoints(267, [25,10,5,1]))