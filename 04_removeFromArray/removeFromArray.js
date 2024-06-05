// const removeFromArray = function(arr, ...target) {
//     const target_len = target.length;
//     let index;
//     for (let i = 0; i < target_len; i++) {
//         while ((index = arr.indexOf(target[i])) >= 0) {
//             arr.splice(index, 1);
//         }
//     }
//     return arr;
// };

const removeFromArray = function(arr, ...targets) {
    return arr.filter(val => !targets.includes(val));
}

// Do not edit below this line
module.exports = removeFromArray;
