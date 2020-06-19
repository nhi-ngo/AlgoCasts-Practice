// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const negative = n < 0;
  let reversed = 0;

  if (negative) {
    n *= -1;
  }
  debugger;

  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return negative ? reversed * -1 : reversed;
}

// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');

//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }

//   return parseInt(reversed);
// }

module.exports = reverseInt;
