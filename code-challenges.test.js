// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// Test 1:

describe('stringCoder', () => {
    it('takes in a string and returns a string with a coded message', () => {
        expect(stringCoder(secretCodeWord1)).toEqual('L4ck4d41s1c4l')
        expect(stringCoder(secretCodeWord2)).toEqual('G0bbl3dyg00k')
        expect(stringCoder(secretCodeWord3)).toEqual('3cc3ntr1c')
    })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// stringCoder
//   ✕ takes in a string and returns a string with a coded message (1 ms)

// ● stringCoder › takes in a string and returns a string with a coded message

//   ReferenceError: stringCoder is not defined

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.

// Psuedocode:
// Function Signature
// input: string
// output: string

// input: const secretCodeWord1 = "Lackadaisical"
// output: "L4ck4d41s1c4l"

// input: const secretCodeWord2 = "Gobbledygook"
// output: "G0bbl3dyg00k"

// input: const secretCodeWord3 = "Eccentric"
// output: "3cc3ntr1c"

// Strategy: Create a function called stringCoder that takes a string as a parameter
// In the Function: create an empty variable
// Use the split method to create an array
// Use the map method to map through the array (only need i for index)
// Use ternary operator to determine the sortedArr of each index and change accordingly
// return encodedWord

const stringCoder = (string) => {
    let encodedWord = ''
    string.split('').map((_,i) => {
       encodedWord = string[i].toLowerCase() === 'a' ? encodedWord += '4' : string[i].toLowerCase() === 'e' ? encodedWord += '3' : string[i].toLowerCase() === 'i' ? encodedWord += '1' : string[i].toLowerCase() === 'o' ? encodedWord += '0' : encodedWord += string[i]
    })
    return encodedWord
}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// stringCoder
//   ✓ takes in a string and returns a string with a coded message (10 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// Test 2:

describe('wordsWithChar', () => {
    it('takes in an array of words and a single letter and returns an array of all the words containing that particular letter', () => {
        expect(wordsWithChar(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(wordsWithChar(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// wordsWithChar
// ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)

// ● wordsWithChar › takes in an array of words and a single letter and returns an array of all the words containing that particular letter

// ReferenceError: wordsWithChar is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// Psuedocode
// Function Signature
// input: array of strings and a character
// output: array of strings

// input: const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]  and const letterA = "a"
// output: ["Mango", "Apricot", "Peach"]

// input: const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"] and const letterE = "e"
// output: ["Cherry", "Blueberry", "Peach"]

// Strategy: create a function called wordsWithChar that will take in two parameters
// Parameters:  an array of strings and a character
// Inside the function: 
// use the filter method to compare each each word in the array with character
// return array containing words that match character

const wordsWithChar = (array,char) => {
    return array.filter((word) => {
        return word.includes(char) || word.includes(char.toUpperCase())
    })
}

// *** Test Passed *** //
//PASS  ./code-challenges.test.js
// wordsWithChar
// ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe('fullHouse', () => {
    it('takes in an array of 5 numbers and determines whether or not the array is a full house', () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// fullHouse
// ✕ takes in an array of 5 numbers and determines whether or not the array is a full house (3 ms)

// ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house

// ReferenceError: fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// Psuedocode
// Function signature
// input: an array of numbers
// output: boolean

// input: const hand1 = [5, 5, 5, 3, 3]
// output: true

// input:const hand2 = [5, 5, 3, 3, 4]
// output: false

// input: const hand3 = [5, 5, 5, 5, 4]
// output: false

// input: const hand4 = [7, 2, 7, 2, 7]
// output: true

// Strategy: create a function called fullHouse that will take an array of numbers as a parameter
// In the Function: 
// sort the arrays in ascending order (this will group the numbers from small to large)
// ternary operator to check for last three numbers in array are the same
// ternary operator to check for the first two numbers in array are the same
// return true or false (depends if threeOfAKind and twoOfAkind are both true or one is false)
// *** SIDE NOTE ***
// This function does not account if three of kind are smaller than the two of the kind
// This is something I can work on, but at the moment I just couldn't figure it out
// Will return to refactor function to account for additional edge cases

const fullHouse = (handArray) => {
    handArray.sort((a,b) => a - b)

    let threeOfAKind = handArray[2] === handArray[3] && handArray[2] === handArray[4] ? true : false
    let twoOfAKind = handArray[0] === handArray[1] ? true : false
    
    return threeOfAKind && twoOfAKind
}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// fullHouse
// ✓ takes in an array of 5 numbers and determines whether or not the array is a full house (5 ms)
