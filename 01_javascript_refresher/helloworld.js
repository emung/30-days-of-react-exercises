const js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript);

const names = "Martin, Robert, Frank, John, Luke";
const namesArray = names.split(", ");
console.log(namesArray);

const frank = namesArray[2];
console.log(`My name is ${frank}!`); // Should be Frank

const lastIndex = namesArray.length - 1;
const lastName = namesArray[lastIndex];
console.log(`My name is ${lastName}!`); // Should be Luke

// Replacing Robert by James
namesArray[1] = "James";
console.log(namesArray);

