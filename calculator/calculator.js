function add (a,b) {
  return a + b;
}

function subtract (a,b) {
  return a - b;
}

function sum (things) {
	return things.reduce((acc,sumSoFar) => acc+sumSoFar,0);
}

function multiply (things) {
	return things.reduce((acc,soFar) => acc * soFar);
}

function power(a, b) {
  let rtn = a;
  for (let i = 1; i < b; i++) {
    rtn *= a;
  }
  return rtn;
}

function factorial(a) {
  if (a === 0) {
    return 1;
  }
  return a * factorial(a-1);
	
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
