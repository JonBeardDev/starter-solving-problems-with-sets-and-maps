/*
Input: an array of words named words

instantiate a new Map named results

for each word in the words array do:
  lowercase word
  find all unique letters in word
    create a Set with all the letters of the word to remove duplicates
    create an array of letters from the Set and sort alphabetically
    use join to create a string from the array
  if the sorted string of letters is a key in the results Map then
    add word to the array associated with that key
  else
    make a new entry in the results Map with key = sorted string of letters and the value an array with word as its only element
return the results Map
*/

/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
  const results = new Map();

  words.forEach((word) => {
    word = word.toLowerCase();
    const letters = new Set();

    for (let i = 0; i < word.length; i++) {
      letters.add(word.charAt(i));
    }
    const lettersArr = [...letters];
    lettersArr.sort();

    const lettersStr = lettersArr.join("");

    if (results.get(lettersStr)) {
      const currentWords = results.get(lettersStr);
      currentWords.push(word);
      results.set(lettersStr, currentWords);
    } else {
      results.set(lettersStr, [word]);
    }
  });

  return results;
}

module.exports = sameLetters;
