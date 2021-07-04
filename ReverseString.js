// Write a function called reverseString that will take a string and return the string reversed.

/////////// INTERVIEW QUESTIONS ///////////
// How should I handle uppercase vs lowercase letters? 
// Do you want them to be returned in upper or lowercase? 
// Should the returned value have spaces? 


// PSEUDOCODE
/*
Declare new empty string
FOR loop over string
NOTE: start for loop at the back (end) of the string (let i = string.length -1; i > 0; i--)
    push [i] into new string (+=)
return new string
*/


///////////// USING TERNARY OPERATOR /////////////////
///////////// Recursion method ///////////////// (could be slow so dont use if string(s) are long)
const reverseString3 = (input) => {
// console.log('string 3')
// substr() methood = returns characters in a string at the specified location
// "hello" .substr(1); // 'ello'
// charAt() method = returns the specified character from a string
//"hello" .charAt(0): // 'h'
return (input === '') ? '' : reverseString3(input.substr(1)) + input.charAt(0)
}
console.log(reverseString3('string3'))



///////////// USING FOR LOOP /////////////////
const reverseString2 = (input) => {
    // declare a new empty string
    let newStr = '';
    // this for loop will start at the back of the string using -1 as its starting point
    // then set the newStr to be the input[i] // last -> first (reversing the string)
    for (let i = input.length -1; i > 0; i--) {
        newStr += input[i]
    }
    return newStr
}
// console.log(reverseString2('Clayton'));






///////////// USING BUILT IN METHODS /////////////////
const reverseString1 = (input) => {
// console.log(string)\
   return input.split("").reverse().join('')
   
}
// console.log(reverseString1('Cody'));