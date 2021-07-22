// This example is from FreeCodeCamp

// Example: !5 = 1 * 2 * 3 * 4 * 5 = 120
// Example: !10 = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 = 3628800


// NOTES:
/*
/////// IF NUMBER IS 5 ///////
5 * 4 * 3 * 2 * 1 = 120
5 * 4 = 20 
20 * 3 = 60
60 * 2 = 120
240 * 1 = 120

FIRST loop -> 5-1 = 4 -> is num 0 or 1, NO 
    -> 5 * 4 = 20
      :return 20
SECOND loop -> 4-1 = 3 -> is num 0 or 1, NO
    -> 20 * 3 = 60
      :return 60
THIRD loop -> 3-1 = 2 -> is num 0 or 1, NO
    -> 60 * 2 = 120
      :return 120
FOURTH loop -> 2-1 = 1 -> is num 0 or 1, YES!
    -> 120 * 1 = 120
      :return 120
 */


function factoralize(num) {
    // declare new variable in for loop with VAR (NOT LET)
    //if num is greater than 0 keep going -- or ++ 
    for (var product = 1; num > 0; num--) {
        // multiply then concat product with new number in for loop

        product *= num
    }
    return product
}
console.log(factoralize(15));