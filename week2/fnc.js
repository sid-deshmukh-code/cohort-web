function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {


console.log(typeof op); 
return op(a,b); 
}

console.log(doOperation(1, 2, sum))
