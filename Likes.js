
// Write a function called likes which takes in input array, containing the names of people who like an item. It must return the 
// display text as shown in the examples and is dependent on the number of elements in the array.
/*
Output: "no one likes this"

Input: likes(["Peter"])

Output: "Peter likes this"

Input: likes(["Jacob", "Alex"])

Output: "Jacob and Alex like this"

Input: likes(["Max", "John", "Mark"])

Output: "Max, John and Mark like this"

Input: likes(["Alex", "Jacob", "Mark", "Max"])

Output: "Alex, Jacob and 2 others like this"
*/


/////////// INTERVIEW QUESTIONS ///////////
// what if there are multiple arrays of people? 
// How should I handle uppercase letters? 

    
////////////////////////////////////////////////////////////////////////////////
/////// Using regular conditional statement //////////////
////////////////////////////////////////////////////////////////////////////////

// PSEUDOCODE
// Conditional  
// if input length is 0 
    // return message
  // if input length is 1
    // return input + mesage
  // if input length is 2
    // return input + message for 2 people
  // if input length is 3 or more
    // return input + correct message
    

// const likes = (input) => {
//     // console.log(input);
//     let noLikes = 0;
//     let likes = 'likes this'

//   if (input.length === 0) {
//       console.log(`no one ${likes}`)
//       return `no one ${likes}`
//   } else if (input.length === 1) {
//       console.log(input[0] + " " + likes);
//     return input[0] + " " + likes
//   } else if (input.length === 2) {
//       console.log(input[0], 'and', input[1] + " " + likes);
//       return input[0] + input[1] + " " + likes
//   } else if (input.length === 3) {
//       console.log(input[0],', ', input[1], 'and', input[2], likes )
//       return input[0] +", " + input[1] + input[3] + likes
//   } else if (input.length >= 4) {
//       console.log(input[0], ',', input[1], 'and 2 others liked this')
//   }

// }
// // likes(['Kevin'])
// // likes(['Kevin', 'Jeff'])
// // likes(['Kevin', 'Jeff', 'Kile'])
// likes(['Kevin', 'Jeff', 'Kile', 'Cam'])



////////////////////////////////////////////////////////////////////////////////
////////// Using a for loop ////////////
////////////////////////////////////////////////////////////////////////////////

// PSEUDOCODE
// declare empty array to push names to with for loop.
// declare new variable (counter = 0)
// For Loop over parameter
    // push parameter [i] into empty array
    // increase the counter in for loop
    // END for loop
// start conditional 
// if the counter is 1,  return new array + saying (only one person is pushed to new array)
// if the counter is 2, retun new array + saying (two people are pushed in array now)
// if counter is 3 or more, return name1 + name2 + different saying


const likes = (names) => {
    let counter = 0;
    let newNames = [];
    let like = 'like this'
    let likes = 'likes this';
    let noLikes = 'nobody likes this'; // have not used this yet to account for empty argument. 
    
    for (let i = 0; i < names.length; i++) {
        counter ++; 
        newNames.push(names[i])
    }
    // console.log(newNames);
    // console.log(counter);
    if (counter === 1) {
        return newNames + " " + `${likes}`
    } else if (counter === 2) {
        return newNames + " " + "both" + " " + `${like}`
    } else if (counter >= 3) {
        return newNames[0] + ", " + newNames[1] + " " + "and others" + " " + `${like}`
    }
    
}
// likes(['Cody', 'Clay', 'Steve'])
 console.log(likes(['Cody']));
 console.log(likes(['Cody', 'Clay']));
 console.log(likes(['Cody', 'Clay', 'Dave', 'Jeff', 'Kile']));

