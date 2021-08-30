const pastCalc = document.getElementById("calculations");
const presentCalc = document.getElementById("result");
let operator = "";
let num1 = "";
let num2 = "";
let answer = "";

function add(num1, num2) {return num1 + num2};
function subtract(num1, num2) {return num1 - num2};
function multiply(num1, num2) {return num1 * num2};
function divide(num1, num2) {return num1 / num2};
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return Number(num1) + Number(num2);
        case "-":
            return Number(num1) - Number(num2);
        case "*":
            return Number(num1) * Number(num2);
        case "/":
            return Number(num1) / Number(num2);
        default:
            return;
    }
}
function hasOperator(string) {
    if (string.includes("÷") || string.includes("×") || string.includes("−") || string.includes("+")) {
        return true;
    } else {
        return false;
    }
}

function buttonResponse() {
    const numberBtn = document.querySelectorAll(".number");
    const operatorBtn = document.querySelectorAll(".operator");
    const decimalBtn = document.querySelector("#decimal");
    const equalsBtn = document.querySelector("#equals");
    const clearBtn = document.querySelector("#clear");

    for (i = 0; i < 10; i++) {
        let specNumberBtn = numberBtn[i];
        specNumberBtn.addEventListener("click", () => {
            for (j = 0; j < 10; j++) {
                switch (specNumberBtn.innerHTML) {
                    case `${j}`:
                        if (hasOperator(presentCalc.innerHTML) || hasOperator(pastCalc.innerHTML)) {
                            num2 += j;
                        } else {
                            num1 += j;
                        }
                        presentCalc.innerHTML += j;
                        console.log(operator, num1, num2);
                }
            }
        });
    }
    for (i = 0; i < 4; i++) {
        let specOperatorBtn = operatorBtn[i];
        specOperatorBtn.addEventListener("click", () => {
            if (presentCalc.innerHTML.slice(-1) == ".") {
                return;
            } else if (presentCalc.innerHTML == "" && pastCalc.innerHTML == "") {
                return;
            }
            if (hasOperator(pastCalc.innerHTML.slice(-1)) == true && presentCalc.innerHTML == "") {
                if (specOperatorBtn.innerHTML == "−") {
                    presentCalc.innerHTML += "−";
                    num2 += "-";
                } else {
                    return;
                }
            } else if (hasOperator(pastCalc.innerHTML.slice(-1)) == true) {
                answer = operate(operator, num1, num2);
                pastCalc.innerHTML += presentCalc.innerHTML + "=";
                presentCalc.innerHTML = answer;
                num1 = answer;
                num2 = "";
                console.log(answer);
                console.log(operator, num1, num2);
            }
            if (specOperatorBtn.innerHTML == "÷") {
                operator = "/";
                presentCalc.innerHTML += "÷";
            } else if (specOperatorBtn.innerHTML == "×") {
                operator = "*";
                presentCalc.innerHTML += "×";
            } else if (specOperatorBtn.innerHTML == "−") {
                if (presentCalc.innerHTML.slice(-1) == "−") {
                    return;
                } else {
                    operator = "-";
                    presentCalc.innerHTML += "−";
                }
            } else if (specOperatorBtn.innerHTML == "+") {
                operator = "+";
                presentCalc.innerHTML += "+";
            }
            if (pastCalc.innerHTML.includes("=")) {
                pastCalc.innerHTML = "";
            }
            pastCalc.innerHTML += presentCalc.innerHTML;
            presentCalc.innerHTML = "";
        });
    }
    decimalBtn.addEventListener("click", () => {
        if (presentCalc.innerHTML == "" || presentCalc.innerHTML == "−") {
            return;
        } else if (presentCalc.innerHTML.includes(".") == false) {
            presentCalc.innerHTML += "."
            if (hasOperator(presentCalc.innerHTML) || hasOperator(pastCalc.innerHTML)) {
                num2 += ".";
            } else {
                num1 += ".";
            }
        }; 
    });
    equalsBtn.addEventListener("click", () => {
        if (operator == "" || num1 == "" || num2 == "") {
            return;
        }
        answer = operate(operator, num1, num2);
        pastCalc.innerHTML += presentCalc.innerHTML + "=";
        if (answer == Infinity) {
            operator = "";
            num1 = "";
            num2 = "";
            pastCalc.innerHTML = "";
            presentCalc.innerHTML = "";
            alert ("Trying to divide by 0?\nWe don't do that here.");
            return;
        }
        if (String(answer).includes(".") && String(answer).length > String(answer.toFixed(6)).length) {
            presentCalc.innerHTML = answer.toFixed(6);
        } else {
            presentCalc.innerHTML = answer;
        }
        num1 = answer;
        num2 = "";
        console.log(answer);
    });
    clearBtn.addEventListener("click", () => {
        operator = "";
        num1 = "";
        num2 = "";
        pastCalc.innerHTML = "";
        presentCalc.innerHTML = "";
    });
};

buttonResponse();