/* 
Given an array of integers, find the sum of its elements.

For example, if the array ar=[1,2,3], 1+2+3=6,  so return 6.

Function Description
Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):
    ar: an array of integers

Input Format
The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.
*/


//Psuedocode
// declare variable of 0

    //FOR loop over parameter
      // empty variable  += i
      //END

//return variable


//input = [2, 3, 5] => 10
//1st loop -> 0 + 2 = 2
//2nd loop -> 2 + 3 = 5
//3rd loop -> 5 + 5 = 10


const findSum = (nums) => {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum
}
console.log(findSum([2, 3, 5]));