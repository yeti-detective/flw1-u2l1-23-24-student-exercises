// CODE ALONG
// We want to write a function that:
//   - Takes any two numbers as arguments
//   - Multiplies them together, and 
//   - Logs them to the console.

// 1. DECLARE & NAME THE FUNCTION
//   - What should I name this function?
function multiplyTwoNumbers(numOne, numTwo) {
  console.log(numOne * numTwo);
}

// 2. PARAMETERS
//   - How many parameters will I need?
//   - How do I know this?
//   - What should I call them?

// 3. BODY
//   - What needs to happen to my parameters to give me the result I want?
//   - Where do I want the result to show up?

// 4. FUNCTION CALL
//   - Call the function and pass through arguments to see if the function works.

multiplyTwoNumbers(10, 45);

// CODE SOLO
// 5. Write a function that will do the following:
//   - If the correct password “October” is entered, print the message “Success!” to the console
//   - Else, print “Try again!” if any other password is entered.
const checkIfPasswordIsOctober = password => {
  if (password === "October") {
    console.log("Success!")
  } else {
    console.log("Try again!")
  }
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

// for (const month of months) {
//   console.log(`Checking if ${month} is the password:`)
//   checkIfPasswordIsOctober(month)
// }