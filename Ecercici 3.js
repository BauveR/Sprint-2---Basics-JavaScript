const typeNum = (num) => {
    return num == 0 ? "zero" : num > 0 ? "positive" : "negative";
};

const numMaximum = (num1, num2, num3) => {
    return num1 > num2 && num1 > num3 ? num1 : num2 > num3 ? num2 : num3;
};