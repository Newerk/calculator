const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const power = (num1, num2) => Math.pow(num1, num2);

const operate = (operator, num1, num2) => {
    let result = 0;
    switch (operator) {
        case add:
            result = add(num1, num2);

            break;
        case subtract:
            result = subtract(num1, num2);

            break;
        case multiply:
            result = multiply(num1, num2);

            break;
        case divide:
            result = divide(num1, num2);

            break;

        default:
            alert('Not an operator button');
            break;
    }

    return result;
};



console.log(operate('what',300,5));

// console.log(add(1, 2));//3

// console.log(subtract(2, 1));//1

// console.log(multiply(2, 2));//4

// console.log(divide(4, 2));//2