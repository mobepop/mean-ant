/**
 * 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
    Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
    Expected output: "United States of America"

 */

function longestCountryName(countries) {
   let res = ''

   countries.forEach(name => {
      res = name.length < res.length? res : name
   })

   return res
}

console.log("Output: " + longestCountryName(["Australia", "Germany", "United States of America"]))
console.log("Output: " + longestCountryName(["Canada", "Germany", "Slovenia"]))
console.log("Output: " + longestCountryName(["Italy", "Brazil", "Canada", "USA"]))
console.log("Output: " + longestCountryName(["France", "Vietnam", "Australia"]))