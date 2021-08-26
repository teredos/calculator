const calcNumber = document.querySelectorAll(".calc-number");
const calcSmall = document.querySelectorAll(".small-button");
const calcDecimal = document.querySelector("#decimal");
const calcEquals = document.querySelector("#equals");
const calcCalculations = document.querySelector("#calculations");
const calcResult = document.querySelector("#result");
let firstNumber = "";
let secondNumber = "";
let firstOperator = "";

add = (...numbers) => {
    return numbers.reduce((num1, num2) => {
        return num1 + num2;
    });
};
subtract = (...numbers) => {
    return numbers.reduce((num1, num2) => {
        return num1 - num2;
    });
};
multiply = (...numbers) => {
    return numbers.reduce((num1, num2) => {
        return num1 * num2;
    });
};
divide = (...numbers) => {
    return numbers.reduce((num1, num2) => {
        return num1 / num2;
    });
};
operate = (operator, ...numbers) => {
    if (operator == "+") {
        return numbers.reduce((num1, num2) => {
            return add(Number(num1), Number(num2));
        });
    } else if (operator == "-") {
        return numbers.reduce((num1, num2) => {
            return subtract(Number(num1), Number(num2));
        });
    } else if (operator == "*" || operator == "x") {
        return numbers.reduce((num1, num2) => {
            return multiply(Number(num1), Number(num2));
        });
    } else if (operator == "/") {
        return numbers.reduce((num1, num2) => {
            return divide(Number(num1), Number(num2));
        });
    }
};
includesOperator = (string) => {
    return (string.includes("÷") || string.includes ("×") || string.includes("−") || string.includes("+") ? true : false);
};
resetAll = () => {
    calcCalculations.innerHTML = "";
    calcResult.innerHTML = "";
    firstNumber = "";
    secondNumber = "";
    firstOperator = "";
}

for (i = 0; i < calcNumber.length; i++) {
    const specificNum = calcNumber[i]; 
    specificNum.addEventListener("click", () => {
        calcResult.innerHTML += specificNum.innerHTML;
        if (includesOperator(calcCalculations.innerHTML) === false) {
            firstNumber += specificNum.innerHTML;
            console.log(firstNumber);
        } else {
            secondNumber += specificNum.innerHTML;
            console.log(secondNumber);
        }
    });
};
for (i = 0; i < calcSmall.length; i++) {
    const specificSmallBtn = calcSmall[i];
    specificSmallBtn.addEventListener("click", () => {
        switch (specificSmallBtn.innerHTML) {
            case "C":
                resetAll();
                break;
            case "÷":
                firstOperator = "/";
                if (includesOperator(calcCalculations.innerHTML) === false) {
                    calcCalculations.innerHTML += firstNumber;
                }
                if (calcCalculations.innerHTML.includes("=")) {
                    calcCalculations.innerHTML = firstNumber;
                }
                calcCalculations.innerHTML += "÷";
                calcResult.innerHTML = "";
                console.log("divide");
                break;
            case "×":
                firstOperator = "*";
                if (includesOperator(calcCalculations.innerHTML) === false) {
                    calcCalculations.innerHTML += firstNumber;
                }
                if (calcCalculations.innerHTML.includes("=")) {
                    calcCalculations.innerHTML = firstNumber;
                }
                calcCalculations.innerHTML += "×";
                calcResult.innerHTML = "";
                console.log("multiply");
                break;
            case "−":
                firstOperator = "-";
                if (includesOperator(calcCalculations.innerHTML) === false) {
                    calcCalculations.innerHTML += firstNumber;
                }
                if (calcCalculations.innerHTML.includes("=")) {
                    calcCalculations.innerHTML = firstNumber;
                }
                calcCalculations.innerHTML += "−";
                calcResult.innerHTML = "";
                console.log("minus");
                break;
            case "+":
                firstOperator = "+";
                if (includesOperator(calcCalculations.innerHTML) === false) {
                    calcCalculations.innerHTML += firstNumber;
                }
                if (calcCalculations.innerHTML.includes("=")) {
                    calcCalculations.innerHTML = firstNumber;
                }
                calcCalculations.innerHTML += "+";
                calcResult.innerHTML = "";
                console.log("add");
                break;
        }
    });
}
calcDecimal.addEventListener("click", () => {
    if (calcResult.innerHTML.includes(".") === false) {
        calcResult.innerHTML += ".";
    }
    if (includesOperator(calcCalculations.innerHTML) === false) {
        if (firstNumber.includes(".") == false) {
            firstNumber += ".";
            console.log(firstNumber);
        }
    } else {
        if (secondNumber.includes(".") == false) {
            secondNumber += ".";
            console.log(secondNumber);
        }
    }
});
calcEquals.addEventListener("click", () => {
    console.log(firstOperator, firstNumber, secondNumber);
    if (firstOperator == "" || firstNumber == "" || secondNumber == "") {
        return;
    } else {
        let answer = operate(firstOperator, firstNumber, secondNumber);
        calcCalculations.innerHTML += secondNumber + "=";
        if (String(answer).includes(".") && String(answer).includes("e") == false) {
            calcResult.innerHTML = parseFloat(answer.toFixed(5));
            if (answer.toFixed(5) != parseFloat(answer)) {
                calcResult.innerHTML += "...";
            }
        } else {
            calcResult.innerHTML = answer;
        }
        firstNumber = answer;
        secondNumber = "";
        firstOperator = "";
    }
});


