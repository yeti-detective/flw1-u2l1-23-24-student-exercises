// 1. Write a function that:
//   - Console.logs 'Hello World'
function helloWorld() {
  console.log('Hello World');
}

// 2. Write a function with 1 parameter that:
//  - Console.logs whatever you want it to say.
//  - This would be a good time to use string interpolation!
function say(words) {
  console.log(`${words}`);
}

// 3. Write a function with 1 parameter that:
//  - Prints a random number between 1 and whatever number is for the provided argument. 
//  - You might need to search how to generate a random number.
//  - You might need to search how to round a number up.
function randomNumberBetweenOneAndMax(max) {
  console.log(Math.floor(Math.random() * max) - 1)
}
randomNumberBetweenOneAndMax(100);

// 4. Write a function with 3 parameters that:
//  - Takes the product of the first two parameters and raises them to the power of the third parameter.
//  - Returns the solution.
//  - Example: Passing this function 1, 2, 3 should give you back the answer to (1 * 2)^3, which is 8. 
//  - You may need to search how to raise the power of a number!
function numOneTimesNumTwoToThePowerOfNumThree(num1, num2, num3) {
  return (num1 * num2) ** num3;
}
console.log(`Two times four to the power of five is: ${numOneTimesNumTwoToThePowerOfNumThree(2, 4, 5)}`)

// 5. Write a function with 1 parameter that:
//  - Converts Celsius to Fahrenheit.
//  - The formula to convert Celsius to Fahrenhiet: F = (C * 1.8) + 32
function celsiusToFahrenheit(tempCelsius) {
    return (tempCelsius * 1.8) + 32
}
// uncomment this to test celsiusToFahrenheit
// console.log(`0 C is ${celsiusToFahrenheit(0)}`);
// console.log(`100 C is ${celsiusToFahrenheit(100)}`);

// 6. Write a function with 1 parameter that:
//  - Takes a word and consoles the letters in alphabetical order.
//  - You'll need to break the word apart, sort the letters, and bring them back together for this!
function printLettersInWordInOrder(word) {
  const letters = word.split('')
  const sortedLetters = letters.sort((a, b) => a > b ? 1 : -1)
  console.log(sortedLetters.join(''))
}
// uncomment this to test printLettersInWordInOrder
// printLettersInWordInOrder("the quick brown fox jumped over the lazy dog")

// BONUS FUNCTIONS!
// 7. Write a function that:
//  - Reverses a number.
function reverseNumber(number) {
  const stringAsNumber = String(number);
  const arrayOfCharacters = stringAsNumber.split('');
  const reversedArray = [];

  for (const c of arrayOfCharacters) {
    reversedArray.unshift(c);
  }

  return Number(reversedArray.join(''))
}
// uncomment this to test reverseNumber
// console.log(`1234 backward is ${reverseNumber(1234)}`);

// 8. Write a function that:
//  - If the number is even, prints “This number is EVEN!”
//  - If the number is odd, prints “This number is ODD!”
function logIfEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('This number is EVEN!')
  } else {
    console.log('This number is ODD!')
  }
}
// uncomment this to test logIfEvenOrOdd
// for (let i = 0; i < 11; i++) {
//   console.log(`Checking evenness of ${i}`)
//   logIfEvenOrOdd(i)
// }

// 9. Write a function that:
//  - Prints every number between 1 and 100.
//  - This requires a loop - you may need to look this up!
function printOneToOneHundred() {
  for (let i = 1; i < 101; i++) {
    console.log(i)
  }
}
// uncomment this to test printOneToOneHundred
// printOneToOneHundred();
// 10. Write a function that:
//  -  Prints every EVEN number between 1 and 100.
//  - This requires a loop - you may need to look this up!
function printEvenNumbersFromOneToOneHundred() {
  // there are a lot of different ways to do this
  for (let i = 2; i < 101; i += 2) {
    console.log(i)
  }
}
printEvenNumbersFromOneToOneHundred();
