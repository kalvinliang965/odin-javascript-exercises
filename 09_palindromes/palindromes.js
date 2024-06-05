const palindromes = function (word) {
    word = word.toLowerCase(). 
            split("").
            filter(x => (x >= 'a' && x <= 'z') || (x >= '0' && x <= '9')). 
            join("");

    return word == word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
