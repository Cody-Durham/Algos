/*
TwoSum
Given an array of integers and a target number, return an array of the 
first 2 integers it finds that add up to the target number
    
twoSum([1, 2, 4, 5, 6, 7, 8, 9, 10, 2], 9) // returns [1,8]
twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2], 4) // returns [1,3]
*/

// INTERVIEW QUESTION(S)
// what if i dont find a match

// YOUR PSEUDOCODE GOES HERE
// fist loop with (i) 
  // start second loop (j) 
    // if i + j === target number (9) 
    // then return i & j



const numsArr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 2]

const twoSum = (arr, target) => {
    // YOUR CODE GOES HERE
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
        // console.log(arr)
        if ( arr[i] + arr[j] === target){
        return [ arr[i], arr[j] ]
        }
      }
    }
}

console.log('this is twoSum(numsArr,9): ', twoSum(numsArr,5))