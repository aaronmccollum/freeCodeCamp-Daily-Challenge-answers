/*
Given a paragraph, return an array of the three most frequently occurring words.

- Words in the paragraph will be separated by spaces.
- Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
- Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
- The returned array should have all lowercase words.
- The returned array should be in descending order with the most frequently occurring word first.
*/


function getWords(paragraph) {

  // Create blank object to hold key, value pair of words and count
  const wordsObject = {};

  const paragraphArray = paragraph.split(" ");

  // Add words and word count to object
  paragraphArray.forEach((word) => {
    word = word.toLowerCase();
    word = removeSymbols(word);
    if (word in wordsObject) { 
      wordsObject[word] += 1;
    } else {
      wordsObject[word] = 1;
    }
  })

  // Create and sort 2d array of [word, count] by count
  const wordsObjectArray = Object.entries(wordsObject).sort((a, b) => b[1] - a[1] );

  // Create variable to hold top 3 words
  const topThreeWordsArray = [];
  let i = 0;
  while (i < 3) {
    topThreeWordsArray.push(wordsObjectArray[i][0]);
    i++;
  }

  console.log(topThreeWordsArray);
  return topThreeWordsArray;
  
}

// Helper function that removes symbols from words
const removeSymbols = word => {
  const wordArray = word.split("");
  const filteredWordArray = [];
  
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === ',' || wordArray[i] === '.' || wordArray[i] === '!') {
      continue;
    }
    filteredWordArray.push(wordArray[i]);
  }

  return filteredWordArray.join("");
}
