const wordInString = "azcbobobegghakl";
const arrayOfChars = wordInString.split('');
let prevString = "";
let currentString = "";
let longestString = "";

arrayOfChars.forEach((char) => {
  console.log(char)
  if (prevString <= char) {
    currentString += char;
    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  } else {
    currentString = char;
  }
  prevString = char;
})

console.log(longestString);
