/*
! PROBLEM STATEMENT
With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

    Output: (examples)
        1) input a = 1, then output : 1
        2) input a = 2, then output : 1, 3
        3) input a = 3, then output : 1, 3, 5
        4) input a = 4, then output : 1, 3, 5, 7
        .
        .
        5) input a = x, then output : 1, 3, 5, 7, .......
*/

/**
 * Generate `n` odd numbers.
 * @param {number} n - Number of odd numbers to generate.
 * @returns {number[]} - Array containing `n` odd numbers.
 */
function getOddNums(n = 1) {
    // Create an array to store the odd numbers
    let oddNumbers = new Array(n);
  
    // Generate the odd numbers using a loop
    for (let i = 0; i < n; i++) {
      oddNumbers[i] = 2 * i + 1;
    }
  
    // Log the generated odd numbers to the console
    console.log(`Output: ${oddNumbers.join(", ")}`);
  
    // Return the array of odd numbers
    return oddNumbers;
  }
  
  // Example usage
  getOddNums(2);
  