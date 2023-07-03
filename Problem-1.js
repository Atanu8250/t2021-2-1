/*
! PROBLEM STATEMENT
Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
     Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
     Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
*/

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

// Example usage
const calc = new BasicCalculator(2, 10, 'addition');
console.log(calc.calculate());
