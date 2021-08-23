
/*
Create a function called findMissingNums that takes in two arrays. Iterate over the first array and if the number you are iteratring over is NOT present in the second array, push the number into it. Once the loop is complete return the second array.

Input: [0,1,2,3,4,5,6,7,8,9], [2,3,7,9]

Output: [ 2, 3, 7, 9, 0, 1, 4, 5, 6, 8 ]


*/

// INTERVIEW QUESTION(S)
// how should I deal with negative numbers? 
// how should I deal with floats? 

/* YOUR PSEUDOCODE GOES HERE
For loop over arr1
  // if [i] in arr2 does not include arr[i]
  // then push into arr2 
  End
//Return arr2
*/





const missingNums = (arr1, arr2) => {
  // console.log(arr1);
  // console.log(arr2);

  for (let i = 0; i < arr2.length; i++) {
    // console.log(arr1[i]);
    if (!arr1.includes(arr2[i]))
    arr2.push(arr1[i])
  }
  console.log(arr2.length);
  return arr2

}
console.log(missingNums([1, 4, 6, 234, 5, 74], [1, 876, 234, 56, 263]));





// const findMissingNums = (arr1,arr2) => {
//     // console.table(arr1)
//     // console.table(arr2)
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i]) ) {
//       // console.log(arr1[i])
//       arr2.push(arr1[i])
//     }
//   }
//       // console.log(arr2)
//       return arr2
//   }
//   findMissingNums([0,1,2,3,4,5,6,7,8,9], [2,3,7,9])
//   // console.log('findMissingNums([0,1,2,3,4,5,6,7,8,9], [2,3,7,9])', findMissingNums([0,1,2,3,4,5,6,7,8,9], [2,3,7,9]))
  