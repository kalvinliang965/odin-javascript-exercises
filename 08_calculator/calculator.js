const add = function(x, y) {
	return x + y;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, val) => acc + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, val) => acc * val, 1);
};

const power = function(a, b) {
	if (b == 0) {
    return 1;
  }

  else if (b == 1) {
    return a;
  }

  else if (b % 2 == 0) {
    return power(a, b/2) * power(a, b/2);
  }

  else {
    return a * power(a, (b - 1) / 2) * power(a, (b - 1) / 2);
  }

};

const factorial = function(n) {
  let ret = 1;
  for (let i = 1; i <= n; i++) {
    ret *= i;
  }
  return ret;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
