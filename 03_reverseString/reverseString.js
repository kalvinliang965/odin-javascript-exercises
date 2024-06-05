

const reverseString = function(word) {
    return word.split("").reverse().join("");
};



/* Iterative way */

// const reverseString = function(word) {
//     let ret = '';
//     const N = word.length;
//     for (let i = N - 1; i >= 0; i--) {
//         ret += word[i];
//     }

//     return ret;
// };



/* Recursive way */

// const reverseString = function(word) {
    
//     if (word.length == 0) return "";

//     return reverseString(word.substring(1)) + word[0];
// };

// Do not edit below this line
module.exports = reverseString;
