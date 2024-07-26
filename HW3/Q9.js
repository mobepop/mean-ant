/**
 * 9. Write a JavaScript function which accepts an argument and returns the type.
    Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
 */

const isType = arg => {
    return typeof arg
}

console.log("Output: " + isType("hello"));
console.log("Output: " + isType(100));
console.log("Output: " + isType("a" === "a"));
console.log("Output: " + isType({}));
console.log("Output: " + isType(function() {}));
console.log("Output: " + isType(null));
console.log("Output: " + isType(undefined));
