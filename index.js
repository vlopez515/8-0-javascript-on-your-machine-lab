/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
   let input = process.argv;
   let operator = process.argv[2];
   let arr = input.slice(3);
   let result = Number(arr[0]);

   if (!operator) {
        result = "No operation provided..." 
    } else if (arr.length === 0) { 
        result = "No numbers provided..."
    } else if (operator === "plus") {
       for(let i= 1; i < arr.length; i++) 
        result += Number(arr[i]);
    } else if (operator === "minus") { 
       for (let i= 1; i < arr.length; i++) 
        result -= Number(arr[i]);
    } else if (operator !== "plus" && operator !== "minus") {
        result = `Invalid operation: ${operator}`
    }
    
    return result;
    };

    
   


// Don't change anything below this line.
module.exports = calculator;
