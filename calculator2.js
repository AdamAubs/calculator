let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let currentCalcCount = true;
let totalPairs = [];
let zeroDisplay = true;

document.addEventListener("DOMContentLoaded", () => {
  let display = document.querySelector(".calcDisplay");
  if (zeroDisplay === true) {
    display.textContent = "0";
  } else if (zeroDisplay === false) {
    display.textContent = "";
  }

  const numbersBtn = document.querySelectorAll(".number");
  const operatorBtn = document.querySelectorAll(".operator");
  const clearBtn = document.querySelector(".clear");
  const calculateBtn = document.querySelector(".calculate");

  numbersBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      zeroDisplay = false;
      display.textContent += btn.value;

      if (currentCalcCount === true) {
        firstNumber = btn.value;
        totalPairs.push(firstNumber);
        console.log(totalPairs);
      } else if (currentCalcCount === false) {
        secondNumber = btn.value;
        totalPairs.push(secondNumber);
      }
    });
  });

  operatorBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      zeroDisplay = false;
      if (currentCalcCount === true) {
        display.textContent += btn.value;
        operator = btn.value;
        totalPairs.push(operator);
        currentCalcCount = false;
      } else if (currentCalcCount === false) {
        display.textContent += btn.value;
        operator = btn.value;
        totalPairs.push(operator);
        console.log(totalPairs);
        firstNumber = 0;
        secondNumber = 0;
        currentCalcCount = true;
      }
    });
  });

  calculateBtn.addEventListener("click", () => {
    zeroDisplay = false;
    let resultString = totalPairs.join("");
    console.log(resultString);
    let answer = calculateExpression(resultString);
    console.log(`Answer: ${answer}`);
    display.textContent = answer;
  });

  clearBtn.addEventListener("click", () => {
    zeroDisplay = true;
    location.reload();
    displayCount = "";
    display.textContent = displayCount;
  });
});

function calculateExpression(resultString) {
  let numbers = resultString.split(/[+\-*/]/).map(Number);
  let operators = resultString.split(/\d+/).filter(Boolean);

  console.log(numbers);
  console.log(operators);

  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    let operator = operators[i];
    let number = numbers[i + 1];

    switch (operator) {
      case "+":
        result += number;
        break;
      case "*":
        result *= number;
        break;
      case "-":
        result -= number;
        break;
      case "/":
        result /= number;
        break;
    }
  }

  return result;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    default:
      return operand1;
  }
}
