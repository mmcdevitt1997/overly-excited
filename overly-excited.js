// Create an array that contains the words in the sentence
let sentence = [
  "The",
  "walrus",
  "danced",
  "through",
  "the",
  "trees",
  "in",
  "the",
  "light",
  "of",
  "the",
  "moon"
];

let questionMark = "?";
let symbol = "*"
let num 

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray, symbol, num) {
  // Each time the for loop executes, you're going to add one more word to this string
  let buildMeUp = "";

  for (let i = 0; i < theWordArray.length; i++) {
    // Concatenate the new word onto buildMeUp
    buildMeUp += theWordArray[i] +'';
    if ((i - 2) % 3 === 0) {
       4 * symbol;
      //  console.log(buildMeUp);
    }
    else {buildMeUp += " "}

    console.log(buildMeUp);
    // // Print buildMeUp to the console
  }
//   console.log(buildMeUp);
}

// Invoke the function and pass in the array
addExcitement(sentence, symbol, num);
