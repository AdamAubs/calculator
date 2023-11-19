let firstOperand = 0;
let secondOperand = 0;
let thirdOperand = 0;
let Operator = "";

let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let calculateButton = document.querySelector(".calculate");
let clearButton = document.querySelector(".clear");

let calculateString = "";

// get value and set to correct operand based on condition
numberButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (Operator === "" && secondOperand === 0 && thirdOperand === 0) {
      firstOperand += this.value;
      console.log(firstOperand);
    } else if (Operator !== "" && firstOperand !== 0 && thirdOperand === 0) {
      secondOperand += this.value;
      console.log(secondOperand);
    } else if (
      Operator === "" &&
      (firstOperand === 0 || firstOperand !== 0) &&
      secondOperand == 0 &&
      thirdOperand !== 0
    ) {
      firstOperand += this.value;
      console.log(firstOperand);
    }
  });
});

let result = 0;

//get operator and call correct arithmetic operation
operatorButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (Operator === "" && secondOperand === 0 && thirdOperand === 0) {
      // sets up initial operator for calculations between first and second
      Operator += this.value;
      console.log(this.value);
      secondOperand = 0;
    } else if (Operator !== "" && firstOperand !== 0 && secondOperand !== 0) {
      // finds result with the first set operand and second set operand
      result = firstOperate(
        parseFloat(firstOperand),
        Operator,
        parseFloat(secondOperand)
      );
      console.log(Operator);
      console.log(result);
      thirdOperand = result;
      firstOperand = 0;
      secondOperand = 0;
      result = 0;
      Operator = "";
    } else if (Operator === "" && firstOperand !== 0 && thirdOperand !== 0) {
      // sets operator to click value
      Operator = this.value;
      result = secondOperate(
        parseFloat(firstOperand),
        Operator,
        parseFloat(thirdOperand)
      );
      console.log(Operator);
      console.log(result);
      firstOperand = result;
      thirdOperand = 0;
      result = 0;
    } else if (Operator === this.value && firstOperand !== 0) {
      // condition for when user clicks '+' or '*' multiply times in a row
      // if so then performs same operation
      if (Operator === "+") {
        console.log(Operator);
        result += firstOperate(
          parseFloat(firstOperand),
          Operator,
          parseFloat(0)
        );
        console.log(result);
      } else if (Operator === "*") {
        console.log(Operator);
        firstOperand *= firstOperate(
          parseFloat(firstOperand),
          Operator,
          parseFloat(1)
        );
        console.log(firstOperand);
      }
    }
  });
});

//performs operand to operand calculation
calculateButton.addEventListener("click", function () {
  if (Operator !== "" && firstOperand !== 0 && secondOperand !== 0) {
    result = firstOperate(
      parseFloat(firstOperand),
      Operator,
      parseFloat(secondOperand)
    );
    console.log(result);
    thirdOperand = result;
    firstOperand = 0;
    secondOperand = 0;
    result = 0;
    Operator = "";
  }
});

clearButton.addEventListener("click", function () {
  firstOperand = 0;
  secondOperand = 0;
  thirdOperand = 0;
  Operator = "";
  console.clear();
});

function firstAdd(num1, num2) {
  return num1 + num2;
}
function secondAdd(num1, num2) {
  return num1 + num2;
}

function firstSubtract(num1, num2) {
  return num1 - num2;
}

function secondSubtract(num1, num2) {
  return num2 - num1;
}

function firstMultiply(num1, num2) {
  return num1 * num2;
}

function secondMultiply(num1, num2) {
  return num1 * num2;
}

function firstDivide(num1, num2) {
  return num1 / num2;
}

function secondDivide(num1, num2) {
  return num2 / num1;
}

let addOperator = "+";
let subtractOperator = "-";
let multiplyOperator = "*";
let divideOperator = "/";

function firstOperate(num1, operate, num2) {
  if (operate === addOperator) return firstAdd(num1, num2);
  if (operate === subtractOperator) return firstSubtract(num1, num2);
  if (operate === multiplyOperator) return firstMultiply(num1, num2);
  if (operate === divideOperator) return firstDivide(num1, num2);
}

function secondOperate(num1, operate, num2) {
  if (operate === addOperator) return secondAdd(num1, num2);
  if (operate === subtractOperator) return secondSubtract(num1, num2);
  if (operate === multiplyOperator) return secondMultiply(num1, num2);
  if (operate === divideOperator) return secondDivide(num1, num2);
}

