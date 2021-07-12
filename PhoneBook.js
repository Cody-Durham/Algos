/*
Write a function called phoneBook that given two parameters, the first being an array of hashes containing n number of names and phone numbers and the second being an array of friends names will then will assemble a phone book that maps the 'friends' array of names to their respective phone numbers if they are found in the first array. Each found entry will print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry is not found, print Not found instead.


Input 1: [{sam:99912222},{tom:11122222},{harry:12299933}]

Input 2: ['sam','ed','harry']

Output:
sam=99912222
NOT FOUND
harry:12299933

*/

// MY NOTES: 
// parameter1 = [{friend1: 12345678}, {friend2:23456789}, {friend3: 345678910}]
// parameter2 = ['friend1', 'friend2', 'friend3']




/////////////////////////////////////////////////////
// PSUEDOCODE
/////////////////////////////////////////////////////
// instantiate empty friends array (const friends = [])
// instantiate empty hash array (const hash = {}) <- this will hold key value pairs?
// FOR loop over the first parameter
    //if friend @ [i] is present then push friend[i] KEY to empty hash ({})
    //




const phoneBook = (input, mapped) => {
    const friends = [];
    const numbers = [];
    const hash = {}; // 

    for (let i = 0; i < input.length; i++) {
        // console.log('object Keys',Object.keys(input[i]));
        const friend = Object.keys(input[i])
        // console.log(friend);
        // console.log(friend[0]);
        // console.log(input[0]);
        // console.log(input[i]);
        hash[friend[0]] = input[i][friend]
        // console.log(hash);
    }
    console.log('hash =', hash);
    
    // for (let i = 0; i < mapped.length; i++) {
    //     console.log(mapped);
    // }
    
}
// console.log(phoneBook([{sam:11111111}, {tom:22222222}, {harry:33333333}]))
phoneBook(['sam', 'ed', 'harry'])