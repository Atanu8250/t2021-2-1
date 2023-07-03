## Company assignment for [TANDEMLOOP](https://www.tandemloop.in/)

# Problem Descriptions and Solutions

## Problem 1: Calculator using Class

### Intuition:
The problem requires creating a small calculator that performs basic operations such as addition, subtraction, multiplication, and division. The calculator takes inputs `a` and `b` as numbers and the type of operation as a string.

### Approach:
1. Create a class called `BasicCalculator`.
2. Implement the constructor to initialize the `a`, `b`, and `operation` properties of the calculator.
3. Implement the `calculate()` method that performs the calculation based on the provided operation.
4. Use a switch statement to handle different operations and calculate the result accordingly.
5. Return the result of the calculation.

<details open>
     <summary><b><u>Code</u></b><summary>

```javascript
class BasicCalculator {
     /**
      * @param {number} a - First parameter for the operation 
      * @param {number} b - Second parameter for the operation 
      * @param {string} operation - Operation name
      * */
     constructor(a = 0, b = 0, operation) {
          if (+a === NaN || +b === NaN) throw Error('Wrong parameters provided');
          this.a = +a;
          this.b = +b;
          this.operation = operation;
     }

     /**
      * Perform the calculation based on the provided operation
      * @param {string} operation - Optional operation name, defaults to the initial operation provided in the constructor
      * @returns {number} - Result of the calculation
      */
     calculate(operation = this.operation) {
          // Convert the operation name to lowercase
          operation = operation.toLowerCase();

          if (typeof operation !== 'string') throw Error('Wrong parameters provided');

          let result = 0;
          switch (operation) {
               case 'addition':
                    result = this.a + this.b;
                    break;

               case 'subtraction':
                    result = this.a - this.b;
                    break;

               case 'multiplication':
                    result = this.a * this.b;
                    break;

               case 'division':
                    result = this.a / this.b;
                    break;

               default: {
                    throw Error('Please provide a proper "Operation" from the options: "addition", "subtraction", "multiplication", or "division"!');
               }
          }

          // Capitalize the first letter of the operation name
          const operationName = operation.charAt(0).toUpperCase() + operation.slice(1);
          console.log(`${operationName} result: ${result}`);
          return result;
     }
}
```

</details>>

---

## Problem 2: Generating Odd Numbers

### Intuition:
The problem requires generating a series of odd numbers based on the input value `a`.

### Approach:
1. Implement the `getOddNums()` function that takes an input `n` as the number of odd numbers to generate.
2. Create an array to store the odd numbers.
3. Use a loop to generate the odd numbers and store them in the array.
4. Return the array of odd numbers.

<details open>
     <summary><b><u>Code</u></b><summary>

```javascript
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
    console.log(`Output for input ${n}: ${oddNumbers.join(", ")}`);
  
    // Return the array of odd numbers
    return oddNumbers;
  }
```

</details>>

---

## Problem 3: Generating Odd Numbers (Alternate)

### Intuition:
This problem is similar to Problem 2 but has a slightly different pattern in the output. The series of odd numbers should be generated until `a` is reached, but for even values of `a`, the series should go up to `a-1`.

### Approach:
1. Implement the `getOddNums()` function similar to Problem 2.
2. Check if the input `n` is odd or even.
3. If `n` is odd, generate `n` odd numbers as in Problem 2.
4. If `n` is even, generate `n-1` odd numbers to follow the desired pattern.
5. Return the array of odd numbers.

<details open>
     <summary><b><u>Code</u></b><summary>

```javascript
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
```

</details>
---

## Problem 4: Counting Multiples in an Array

### Intuition:
The problem requires counting the total occurrences of numbers in the given array that are multiples of the numbers [1, 2, 3, 4, 5, 6, 7, 8, 9].

### Approach:
1. Implement the `getCountOfMultiples()` function that takes an input array `inputArr`.
2. Create an object called `recordMultiples` to store the count of multiples for each number.
3. Initialize the `recordMultiples` object with 0 for numbers 1 to 9.
4. Iterate through the `inputArr` and for each number, check its divisibility by numbers 1 to 9.
5. If a number is divisible by a particular divisor, increment the count in the `recordMultiples` object for that divisor.
6. Log the `recordMultiples` object to the console.
7. Return the `recordMultiples` object.

<details open>
     <summary><b><u>Code</u></b><summary>

```javascript
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
```

</details>>

---

## Time Complexity and Space Complexity:
The time complexity and space complexity for each problem are as follows:

1. Problem 1:
   - Time Complexity: O(1)
   - Space Complexity: O(1)

2. Problem 2:
   - Time Complexity: O(n)
   - Space Complexity: O(n)

3. Problem 3:
   - Time Complexity: O(n)
   - Space Complexity: O(n)

4. Problem 4:
   - Time Complexity: O(n)
   - Space Complexity: O(1) (constant space for the `recordMultiples` object)

