/**
 * 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
    Example string: 'the quick brown fox'
    Expected Output: 'The Quick Brown Fox '
 */
    function capitalizeFirstLetter(phrase) {
        let res = []

        phrase.split(' ').forEach(word => {
            res.push(word.charAt(0).toUpperCase() + word.slice(1))
        })
        return res.join(' ')
    }

    console.log("Output: " + capitalizeFirstLetter("the quick brown fox") + "\t Expected: " + "The Quick Brown Fox");
    console.log("Output: " + capitalizeFirstLetter("avengers, assembled") + "\t Expected: " + "Avengers, Assembled");
    console.log("Output: " + capitalizeFirstLetter("you're always the wrong person") + "\t Expected: " + "You're Always The Wrong Person");