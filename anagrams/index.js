// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }

  const letterCount = {};

  for (const letter of stringA) {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }

  for (const letter of stringB) {
    if (letterCount[letter] === undefined) {
      return false;
    }
    if (letterCount[letter] < 1) {
      return false;
    }

    letterCount[letter]--;
  }

  return true;
}

module.exports = anagrams;
