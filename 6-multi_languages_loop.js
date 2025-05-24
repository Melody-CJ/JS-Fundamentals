const arg = process.argv[2];            // Get the first argument from the command line
const number = parseInt(arg);           // Convert it to an integer

if (!isNaN(number)) {                   // Check if the result is a valid number
  console.log(`My number: ${number}`);  // If valid, print it
} else {
  console.log('Not a number');          // If invalid, print this
}
