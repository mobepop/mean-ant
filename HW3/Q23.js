/**
 * 23. Write a JavaScript function to find the first not repeated character.
Sample arguments: 'abacddbec'
Expected output: 'e'

 */

function firstNotRepeatCharacter(s) {
    const freq = new Map()
    for (let c of s) {
        if (freq.has(c)) {
            freq.set(c, freq.get(c) + 1)
        }
        else freq.set(c, 1)
    }

    for (let c of s) {
        if (freq.get(c) === 1) return c
    }

    return null
}

console.log("Output: " + firstNotRepeatCharacter('abacddbec'))
console.log("Output: " + firstNotRepeatCharacter('Victoriv'))
console.log("Output: " + firstNotRepeatCharacter('netflix'))
console.log("Output: " + firstNotRepeatCharacter('hulu'))