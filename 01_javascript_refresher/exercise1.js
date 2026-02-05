const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Declare an empty array;
const emptyArray = [];

// Declare an array with more than 5 number of elements
// Find the length of your array
const namesArray = ["John", "James", "Robert", "Martin", "Michael", "Evan"];
const lengthOfNamesArray = namesArray.length;
console.log(`Length of namesArray = ${lengthOfNamesArray}`);

// Get the first item, the middle item and the last item of the array
const firstItem = namesArray[0]; // John
const middleItem = namesArray[3]; // Martin
const lastItem = namesArray[lengthOfNamesArray - 1]; // Evan
console.log(`First name in the array = '${firstItem}'`);
console.log(`Middle name in the array = '${middleItem}'`);
console.log(`Last name in the array = '${lastItem}'`);
