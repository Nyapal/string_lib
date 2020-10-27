// String Challenges 
// FEW 2.1 

// Write a function that uppercases the first character of string
const capFirstChar = (str) => {
  return str.replace(str[0], str[0].toUpperCase());
}
console.log(capFirstChar('this is a string')) // expected: 'This is a string'

// Write a function that uppercases the first letter of each word in a string
const capWord = (str) => {
  const splitStr = str.split(' ');
  return splitStr.map((strItem) => capFirstChar(strItem)).join(' ');
}
console.log(capWord('this is a string')) // expected: 'This Is A String'

// Write a function that uppercases every other letter
const upperOtherLetter = (str) => {
  console.log('uppercase every other letter')
}
console.log(upperOtherLetter('this is a string')) // expected: 'This is A string'

// Write a function that removes all whitespace from a given string
const removeWhiteSpace = (str) => {
  console.log('remove all whitespace from a given string ')
}
console.log(removeWhiteSpace('this is a string')) // expected: 'thisisastring'

// Write a function that removes only the extra whitespace from a given
const removeExtraSpace = (str) => {
  return str.split(' ').filter((arrItem) => arrItem !== '').join(' ');
}
console.log(removeExtraSpace(' this is    a  string  ')) // expected: 'this is a string'