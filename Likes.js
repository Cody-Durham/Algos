
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


// PSEUDOCODE
// declare new variable (const noLikes = 'no one likes this')
// declare new variable (const noLikes = 0)
// For Loop over parameter
  // if noLikes === 0 then return 'no one likes this'
    //else if (parameter is === 1) return parameter + 'no one likes this' 
    

/////// Using regular conditional statement //////////////

const likes = (input) => {
    // console.log(input);
    let noLikes = 0;
    let likes = 'likes this'

  if (input.length === 0) {
      console.log(`no one ${likes}`)
      return `no one ${likes}`
  } else if (input.length === 1) {
      console.log(input[0] + " " + likes);
    return input[0] + " " + likes
  } else if (input.length === 2) {
      console.log(input[0], 'and', input[1] + " " + likes);
      return input[0] + input[1] + " " + likes
  } else if (input.length === 3) {
      console.log(input[0],', ', input[1], 'and', input[2], likes )
      return input[0] +", " + input[1] + input[3] + likes
  } else if (input.length >= 4) {
      console.log(input[0], ',', input[1], 'and 2 others liked this')
  }

}
// likes(['Kevin'])
// likes(['Kevin', 'Jeff'])
// likes(['Kevin', 'Jeff', 'Kile'])
likes(['Kevin', 'Jeff', 'Kile', 'Cam'])