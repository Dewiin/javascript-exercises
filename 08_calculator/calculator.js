const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let result = 0;

  array.forEach(element => {
    result += element;
  });

  return result;
};

const multiply = function(array) {
  let result = 1;

  array.forEach(element => {
    result *= element;
  });

  return result;
};

const power = function(base, power) {
	let result = 1;
  for(let i = 0; i < power; i++) {
    result *= base;
  }

  return result;
};

const factorial = function(num) {
	let result = 1;
  for(let i = num; i >= 1; i--) {
    result *= i;
  }

  return result;
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
