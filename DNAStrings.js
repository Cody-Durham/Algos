

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
// T - A compliments (T replaced by A) T => A
// G - C compliments (G replaced by C) G => G
// C - G compliments (C replaced by G) C => G

// YOUR PSEUDOCODE GOES HERE
// declare new empty string
// for loop over 'string'
  // if string[i] === 'A' => 'T'
  // if string[i] === 'T' => 'A'
  // if string[i] === 'G' => 'C'
  // if string[i] === 'C' => 'G'
// Return newString

  let dnaString = 'ATTGC' // output should be 'TAACG'
  
  const dnaTransform = string => {
      // declaring a new variable here to start stacking in letters 
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