function calculate(num1, num2, callbackFunction) {
    return callbackFunction(num1, num2);
}

function calcSum(num1, num2) {
    return num1 + num2;
}

alert(calculate(5, 15, calcSum));