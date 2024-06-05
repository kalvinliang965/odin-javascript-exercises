
const repeatString = function(string, numberOfTime) {

    if (numberOfTime < 0) {
        return `ERROR`;
    }
    let ret = "";

    for (let i = 0; i < numberOfTime; i++) {
        ret += string;
    }

    return ret;
};

// Do not edit below this line
module.exports = repeatString;
