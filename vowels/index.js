// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);

//   return matches ? matches.length : 0;
// }
// match(regex) return an array of all matches or 'null' if no match is found.

function vowels(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (const char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

// const checker = ['a', 'e', 'i', 'o', 'u', 'abc', 'def'];
// const checker = "aeiou"
// although checker as a string works, it is highly recommended to declare checker in an array
// in case we want to look for substrings match

module.exports = vowels;
