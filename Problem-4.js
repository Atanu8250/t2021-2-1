/*
! PROBLEM STATEMENT
Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
    (examples)
    input: [1,2,8,9,12,46,76,82,15,20,30]
    Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}
*/
/**
 * Get the total count of numbers in the input array that are multiples of [1, 2, 3, 4, 5, 6, 7, 8, 9].
 * @param {Array} inputArr - Array of numbers.
 * @returns {Object} - Object with the total counts of numbers that are multiples of [1, 2, 3, 4, 5, 6, 7, 8, 9].
 */
function getCountOfMultiples(inputArr = []) {
    // Create an object to record the count of multiples for each number
    const recordMultiples = {};

    // Initialize the record object with 0 for all the numbers
    for (let i = 1; i <= 9; i++) {
        recordMultiples[i] = 0;
    }

    // Iterate through the input array
    for (let num of inputArr) {
        // Check divisibility of the number by each number from 1 to 9
        for (let i = 1; i <= 9; i++) {
            if (num % i === 0) {
                // Increment the count if the number is divisible
                recordMultiples[i]++;
            }
        }
    }

    // Log the output
    console.log('Output:', recordMultiples);

    // Return the record object
    return recordMultiples;
}

// Example usage
getCountOfMultiples();
