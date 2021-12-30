"use strict";

const textValue = document.querySelector("#cal-textbox");
const b1 = document.querySelector("#b-1");
const b2 = document.querySelector("#b-2");
const b3 = document.querySelector("#b-3");
const b4 = document.querySelector("#b-4");
const b5 = document.querySelector("#b-5");
const b6 = document.querySelector("#b-6");
const b7 = document.querySelector("#b-7");
const b8 = document.querySelector("#b-8");
const b9 = document.querySelector("#b-9");
const b0 = document.querySelector("#b-0");
const b_plus = document.querySelector("#b-plus");
const b_sub = document.querySelector("#b-sub");
const b_mul = document.querySelector("#b-mul");
const b_divide = document.querySelector("#b-divide");
const b_del = document.querySelector("#b-del");
const b_equal = document.querySelector("#b-equal");

let num1 = null;
let num2 = null;
let res = null;
let op = null;

const updateUI = function (digit) {
  let tmpValue = textValue.value;
  textValue.value = tmpValue + digit;
  //   console.log(textValue.value);
};

const calProcess = function () {
  if (op !== null && textValue.value !== "" && num1 !== null) {
    let calValue = textValue.value;
    const opIndex = calValue.indexOf(op);
    num2 = calValue.slice(opIndex + 1);
    if (op === "+") {
      res = Number(num1) + Number(num2);
    }
    if (op === "-") {
      res = Number(num1) - Number(num2);
    }
    if (op === "*") {
      res = Number(num1) * Number(num2);
    }
    if (op === "/") {
      res = Number(num1) / Number(num2);
    }
    textValue.value = String(res);
    num1 = null;
    num2 = null;
    op = null;
    res = null;
  }
};

const btnPress = function (pressedBtn) {
  console.log(pressedBtn);
  switch (pressedBtn) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "+":
    case "-":
    case "*":
    case "/":
      if (
        pressedBtn === "+" ||
        pressedBtn === "-" ||
        pressedBtn === "*" ||
        pressedBtn === "/"
      ) {
        if (op === null) {
          num1 = textValue.value;
          op = pressedBtn;
        }
      }
      updateUI(pressedBtn);
      console.log("0-9", pressedBtn);
      break;
    case "Enter":
    case "=":
      calProcess();
      break;
    default:
      console.log("not in the list ", pressedBtn);
      break;
  }
};

b1.addEventListener("click", function () {
  btnPress(b1.textContent);
});
b2.addEventListener("click", function () {
  btnPress(b2.textContent);
});
b3.addEventListener("click", function () {
  btnPress(b3.textContent);
});
b4.addEventListener("click", function () {
  btnPress(b4.textContent);
});
b5.addEventListener("click", function () {
  btnPress(b5.textContent);
});
b6.addEventListener("click", function () {
  btnPress(b6.textContent);
});
b7.addEventListener("click", function () {
  btnPress(b7.textContent);
});
b8.addEventListener("click", function () {
  btnPress(b8.textContent);
});
b9.addEventListener("click", function () {
  btnPress(b9.textContent);
});
b0.addEventListener("click", function () {
  btnPress(b0.textContent);
});
b_plus.addEventListener("click", function () {
  btnPress(b_plus.textContent);
});
b_sub.addEventListener("click", function () {
  btnPress(b_sub.textContent);
});
b_mul.addEventListener("click", function () {
  btnPress(b_mul.textContent);
});
b_divide.addEventListener("click", function () {
  btnPress(b_divide.textContent);
});

b_del.addEventListener("click", function () {
  let calValueInArray = [...textValue.value];
  calValueInArray.pop();
  textValue.value = calValueInArray.join("");
});

b_equal.addEventListener("click", function () {
  btnPress(b_equal.textContent);
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Backspace") {
    let calValueInArray = [...textValue.value];
    calValueInArray.pop();
    textValue.value = calValueInArray.join("");
  }
  btnPress(e.key);
});
