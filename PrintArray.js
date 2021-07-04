// create a function called printArr that will print the items of an array. 

/////////// INTERVIEW QUESTIONS ///////////
// What type of values will the array hold? 
// What if the string / array is empty? 
// Will the values hold nested arrays? I might need to loop instead of just a return






/////////////////////////////////////////////////////////////////
////////// USING A FOR LOOP TO RETURN VALUE /////////////////////
/////////////////////////////////////////////////////////////////
const printArr2 = (input) => {
    let string = ''; 
    for (let i = 0; i < input.length; i++) {
    //    console.log(string);
       string += `${input[i]}`
    }
    return string
}
console.log(printArr2('ab'));




/////////////////////////////////////////////////////////////////
///////// USING CONDITIONAL TO RETURN VALUE /////////////
/////////////////////////////////////////////////////////////////

// const printArr = (input) => {
//     // console.log(input)
//     if (input === undefined) {
//         console.log(`sorry, there is no value for the input. Please add value. `) 
//         return input
//     } else {
//         console.log(input)
//         return input
//     }
// }
// printArr()
// printArr('Cody')
// printArr(['Cody', 'Maya', 'Kevin'])
// console.log(printArr());


