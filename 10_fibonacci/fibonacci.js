const fibonacci = function(n) {
    let cleanNum;
    if (typeof(n) == "string") {
        cleanNum = n - '0';
    } else if (typeof(n) == "number") {
        cleanNum = n;
    } else {
        return "ERROR";
    }

    if (cleanNum < 0) return "OOPS";
    let arr = [];
    arr.push(0);
    arr.push(1);
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
