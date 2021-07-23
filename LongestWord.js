// Write a funciton that will return the longest word in a given sentence



// Psudeocode
// split the string into seperate arrays for the FOR loop
// declare a variable to keep track of the length of a string/ start at zero (let longest = 0)
//
// FOR loop over the string
    //if (string @ i is longer than 0)
    // then save it. Variable += string[i]
    //END
// return new string



const findLongestWord = (string) => {
    // need to split the string up into seperate components
    let words = string.split(' ');
    // set variable to 0 and replace it when conditional is met
    let longestWord = 0;

    // console.log(words)
    for (let i = 0; i < words.length; i++) { // this is looping over the WORDS array from split(), not the parameter!!!!
        if (words[i].length > longestWord) {
            // saving over the old value each time if conditional is met. is new value bigger than the last one?
            // if old value is larger than the last one, new variable is 'saved over' with new value
            longestWord = words[i].length 
        }
    }
    return longestWord

}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


// NOTES:
// First loop -> 
    // 'The' = is 3 greater than 0 = YES.
        // store the value in longestWord
// Second loop ->   
        // 'quick' = is 5 greater than 3 (previous value stored in longestWord) = YES. 
        // store the value in longestWord
// Third loop ->   
        // 'brown' = is 5 greater than 5 (previous value stored in longestWord) = NO. 
        // didnt meet conditional statment (does not store value in longestWord)
// Fourth loop ->   
        // 'fox' = is 3 greater than 5 (previous value stored in longestWord) = NO. 
        // didnt meet conditional statment (does not store value in longestWord)
// Fifth loop ->   
        // 'jumped' = is 6 greater than 5 (previous value stored in longestWord) = YES. 
        // store the value in longestWord
// Sixth loop ->   
        // 'over' = is 4 greater than 6 (previous value stored in longestWord) = NO. 
        // didnt meet conditional statment (does not store value in longestWord)
// Seventh loop ->   
        // 'the' = is 3 greater than 6 (previous value stored in longestWord) = NO. 
        // didnt meet conditional statment (does not store value in longestWord)
// Eighth loop ->   
        // 'lazy' = is 4 greater than 6 (previous value stored in longestWord) = NO. 
        // didnt meet conditional statment (does not store value in longestWord)
// Ninth loop ->   
        // 'dog' = is 3 greater than 6 (previous value stored in longestWord) = NO. 
        // didnt meet conditional statment (does not store value in longestWord)
