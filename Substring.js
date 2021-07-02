
/*
  Longest Substring With No Duplicates 

  Given a string, return the length of the longest substring without repeating characters. You need only return the length of the longest substring and not the substring itself. 

  Input: 'abca'
  Output:3 (longest strings are: 'abc' or 'bca')

  Input: 'abcbadb'
  Output: 4 (longest string is:'cbad')
*/

// INTERVIEW QUESTION(S)

// YOUR PSEUDOCODE GOES HERE
// for loop over 'string'
  // initalize new string 
  // if [i] !== [i] then push to new string
  // end loop
// return new string + length


let charSet1 = 'abca'
let charSet2 = 'abcbadb'

const lengthOfLongestSubstr = (string) => {
  let newString = '';
  let array = [];

  for (let i = 0; i < string.length; i++) {
    if (!newString.includes(string[i])) {
      newString += string[i]
    }
  }
  let answer = newString.toUpperCase()
  let length = newString.length
  return `The longest string is ${answer}, and the length of the string is ${length}`
}
// lengthOfLongestSubstr( charSet1 )
lengthOfLongestSubstr( charSet2 )