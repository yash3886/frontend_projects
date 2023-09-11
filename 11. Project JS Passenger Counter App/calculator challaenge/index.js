let num1 = 8,
  num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let result = document.getElementById("result");

function add() {
  result.textContent = "Result: " + (num1 + num2);
}

function sub() {
  result.textContent = "Result: " + (num1 - num2);
}

function divide() {
  result.textContent = "Result: " + num1 / num2;
}

function mult() {
  result.textContent = "Result: " + num1 * num2;
}
