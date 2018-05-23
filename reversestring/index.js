// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

var rev = "";

function reverse(str) {

    for(var i = 0; i < str.length; i++){
        rev += str[str.length - (i + 1)];
    }

    console.log(rev);

}
reverse("prince");
//module.exports = reverse;
