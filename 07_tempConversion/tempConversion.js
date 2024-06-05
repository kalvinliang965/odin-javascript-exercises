const convertToCelsius = function(temp) {
  const ret = ((temp - 32) / (9 / 5)).toFixed(1);

  return Math.round(ret * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  
  const ret = ((temp * (9 / 5)) + 32).toFixed(1);

  return Math.round(ret * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
