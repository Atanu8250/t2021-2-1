/*
! PROBLEM STATEMENT
With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

    Output: (examples)
        1) input a = 1, then output : 1
        2) input a = 2, then output : 1
        3) input a = 3, then output : 1, 3, 5
        4) input a = 4, then output : 1, 3, 5
        5) input a = 5, then output : 1, 3, 5, 7, 9
        6) input a = 6, then output : 1, 3, 5, 7, 9
        .
        .
        7) input a = x, then output : 1, 3, 5, 7, .......
*/

/**
 * Generate `n` odd numbers.
 * @param {number} n - Number of odd numbers to generate.
 * @returns {number[]} - Array containing `n` odd numbers.
 */
function getOddNums(n = 1) {
    // Update the length depending on `n` is a odd or even
    const length = (n % 2 ? n : n - 1);

    // Create an array to store the odd numbers
    let oddNumbers = new Array(length);

    // Generate the odd numbers using a loop
    for (let i = 0; i < length; i++) {
        oddNumbers[i] = 2 * i + 1;
    }

    // Log the generated odd numbers to the console
    console.log(`Output for input ${n}: ${oddNumbers.join(", ")}`);

    // Return the array of odd numbers
    return oddNumbers;
}

// Example usage
getOddNums(6);
