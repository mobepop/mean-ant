/**
 *16. Write a JavaScript function to extract unique characters from a string.
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"

 */

function extractUniqueCharacters(s) {
    return Array.from(new Set(s)).join('')
}

console.log("Output: " + extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"))
console.log("Output: " + extractUniqueCharacters("Iaminevitable"))
console.log("Output: " + extractUniqueCharacters("helloworld"))