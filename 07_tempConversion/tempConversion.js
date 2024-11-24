const convertToCelsius = function(farhenheitTemp) {
  let celciusTemp = ((farhenheitTemp -32)* (5/9));
  return Math.round((celciusTemp *10)) / 10;
};

const convertToFahrenheit = function(celsiusTemp) {
  let farhenheitTemp = (celsiusTemp * 9) / 5 + 32;
  return Math.round((farhenheitTemp * 10)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
