/**
 * 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
 */

function greeting(func, arg) {
    func(arg);
}

function sayHi(phrase) {
    console.log(`Hi, ${phrase}`);
}

greeting(sayHi, "Nice to Meet you!")
greeting(sayHi, "It's been a long time!")
greeting(sayHi, "How are you doing?")