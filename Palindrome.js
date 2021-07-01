/*
  Write your code in the isPalindrome function that will return TRUE if a given input is a palindrome and FALSE if it's not.

  Input:'aba'
  Output:true

  Input:'abac'
  Output:false
*/

// INTERVIEW QUESTION(S)

// YOUR PSEUDOCODE GOES HERE
// for loop over half of the string
  // if the letter [i] isnt the same as the letter from back (length - i - 1)
  // return true
// otherwise return false

const word1 = 'radar'
const word2 =  'abac'
const word3 = 'race car'

const isPalindrome = word => {
// using this regex, Im trying to remove the white spaces in the word before the for loop.
// not currently removing white space
  // word.replace(/\s/g, "") 
  // console.log(word.replace(/\s/g,''))  
  
  //loop over half of the word (if its a palindrome then the front half is the same as the back half)
  for (let i = 0; i < word.length / 2; i++) {
    // console.log(word[i])
    // if the letter (@[i]) is not the same as the letter from the back then retun false
    if (word[i] !== word[word.length - i - 1]) 
      return false
  } 
  //else return true
  return true
}
console.log(isPalindrome(word1))
console.log(isPalindrome(word2))
console.log(isPalindrome(word3))