

/////////////////////////////////////////////
//////////////// DIRECTIONS /////////////////
/////////////////////////////////////////////
/*
  DNA Strings
  In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Write a function called dnaTransform that takes in a DNA string and returns a string that represents it's compliment.

  Input: "ATTGC"
  Output: "TAACG"
*/


// INTERVIEW QUESTION(S)
// What about capitol letters? Disregrad => yes. 

// QUICK NOTES: 
// A - T compliments (A replaced by T) A => T
// C - G compliments (C replaced by G) C => G

// YOUR PSEUDOCODE GOES HERE
// for loop over 'string'
  // if string[i] === a => 't'
  // if string[i] === t => 'a'
  // if string[i] === g => 'c'
  // if string[i] === c => 'g'

  let dnaString = 'ATTGC' // output should be 'TAACG'


  // A => t
  // T => a
  
  const dnaTransform = string => {
      let newString = ""
      for (let i = 0; i < string.length; i++) {
          if (string[i] === 'A') {
              newString += 'T'
          } if (string[i] === 'T') {
              newString += 'A'
          } if (string[i] === 'G') {
              newString += 'C'
          } if (string[i] === 'C') {
              newString += 'G'
          }
        }
        return newString
}
  console.log(dnaTransform(dnaString))