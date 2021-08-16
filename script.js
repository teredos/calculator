add = (num1, num2) => {return num1 + num2;};
subtract = (num1, num2) => {return num1 - num2};
multiply = (num1, num2) => {return num1 * num2};
divide = (num1, num2) => {return num1 / num2};

operate = (operator, num1, num2) => {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*" || operator == "x") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
};