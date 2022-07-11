var input1 = 0;
var input2 = 0;

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const power = (num1, num2) => Math.pow(num1, num2);


const operate = (operator, num1, num2) => {
    let display = document.querySelector('#display');

    switch (operator) {
        case add:
            display.textContent = add(num1, num2);

            break;
        case subtract:
            display.textContent = subtract(num1, num2);

            break;
        case multiply:
            display.textContent = multiply(num1, num2);

            break;
        case divide:
            display.textContent = divide(num1, num2);

            break;

        case power:
            display.textContent = power(num1, num2);

            break;

        default:
            alert('Not an operator button');
            break;
    }

    return display.textContent;
};



operate(power, 3, 5);//243


