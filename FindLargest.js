// Write a function called largestNumber that will return the largest value from an array.

/////////// INTERVIEW QUESTIONS ///////////


// PSEUDOCODE
// declare a new variable set to the beginning of the array @ 0
  // FOR Each loop (digit) => {}
    // if (each digit @ current iteration is greater than new variable)
    // set set new variable to current value @ its iteration
// Return new variable





/////////////////////////////////////////////////////////////////////////////
// practice   8-23-21
/////////////////////////////////////////////////////////////////////////////
const largestNumber = (numbers) => {
    // console.log(numbers)
    let largest = numbers[0]

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]
        }
    }
    return largest

}
console.log(largestNumber([5, 10, 3805, 23023, 60, 103]));





// const largestNumber = (number) => {
//     // declare a new vairable with a starting point value to that of index 0 (1)
//     let largest = number[0]
//     // start a FOR Each loop here / 
//     number.forEach( (digit) => {
//         // if the digit at current iteration is greater than the iteration, set the new variable to the current value
//         if (digit > largest) {largest = digit}
//     })
//     return largest
// }
// console.log(largestNumber([1,4,5,10,24,98]) );