const sumAll = function(start, end) {

    if (start < 0 || typeof(start) != 'number' || typeof(end) != 'number') {
        return "ERROR";
    }
    let ret = 0;
    let i = Math.min(start, end), j = Math.max(start, end);
    while (i <= j) {
        ret += i;
        i++;
    }

    return ret;

};

// Do not edit below this line
module.exports = sumAll;
