// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”.



// need an array of 1-100
// loop over that array


// const fizzBuzz = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (i % 15 === 0) {console.log('fizzBuzz', i);} 
//         else if (i % 3 === 0) {console.log('fizz')}
//         else if (i % 5 === 0) {console.log('buzz');}
//     }

// }

// fizzBuzz([1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])
 

function fizzBuzz () {
    for (let i = 1; i < 101; i++) {
        if (i % 15 === 0) {console.log(i, 'FizzBuzz')}
        else if (i % 3 === 0) {console.log(i, 'Fizz')}
        else if (i % 5 === 0) {console.log(i, 'Buzz')}
        else (console.log(i, 'dosent work'))
    }
}
fizzBuzz()