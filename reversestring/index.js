// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// *************** SOLUTION #1 ********************
// function reverse(str) {
//     var rev = "";
//     for(var i = 0; i < str.length; i++){
//         rev += str[str.length - (i + 1)];
//     }
//     return rev;
// }

// *************** SOLUTION #2 ********************
function reverse(str) {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");
}

//reverse("mongo");
module.exports = reverse;
