// Write a function called oddsEvens that given a string, prints its even-indexed and odd-indexed characters as space-separated strings on a single line.
// Input: Hacker

// Output: Hce akr


/////////// INTERVIEW QUESTIONS ///////////



// PSEUDOCODE
// Declare new varialbe (string1)
// Declare new variable (string2)
// FOR Loop over the parameter 
  // if i % 2 === 0 then add that 'even' [i] to new string1
  // else add all of the 'odd' strings to string2
// End For loop
// return string += newString




const oddsEvens = (str) => {
    
    let left = ''; 
    let right = '';
    for (let i = 0; i < str.length; i++) {
    //   console.log(str);
    if (i % 2 === 0) {
        left += str[i]
    } else {
        right += str[i]
    }
  }
  return `${left} ${right}`.toLowerCase()
}
console.log(oddsEvens('Hacker'))
console.log(oddsEvens('LimpBisket'))
console.log(oddsEvens('SINGLEWORD'))