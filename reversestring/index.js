// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Syntax: arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])

// whenever reduce() runs it's going to take this starting argument (empty string '')
// and pass it into the arrow function as the first argument and then whatever gets returned
// from that inner function will be then used as the starting argument for every successive run of the function.

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//   let reversed = '';
//   // add the character to the start of the string reversed
//   for (let character of str) {
//     reversed = character + reversed;
//     debugger;
//   }
//   return reversed;
// }
