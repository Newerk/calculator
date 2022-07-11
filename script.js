var displayValue = '';
var num1 = 0;
var num2 = 0;

var display = document.querySelector('#display');

//When number buttons are pressed, it is displayed on the calc in the order they were selected
let numButtons = document.querySelectorAll('.numbers');
numButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        display.textContent += e.target.textContent;
        displayValue = parseInt(display.textContent);
    })

});

// let operatorButtons = document.querySelectorAll('.operators');
// operatorButtons.forEach(btn => {
//     btn.addEventListener('click', e => {

//     })
// })

let negBtn = document.querySelector('#pos-or-neg');
negBtn.addEventListener('click', negativeToggle);

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear);

let deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', backspace);




const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const power = (x, y) => Math.pow(x, y);


const operate = (operator, x, y) => {

    switch (operator) {
        case '+':
            display.textContent = add(x, y);

            break;
        case '-':
            display.textContent = subtract(x, y);

            break;
        case '*':
            display.textContent = multiply(x, y);

            break;
        case '/':
            display.textContent = divide(x, y);

            break;

        case '^':
            display.textContent = power(x, y);

            break;

        default:
            alert('Not an operator');
            break;
    }

    return display.textContent;
};

function negativeToggle() {
    let value = displayValue.toString();

    if (value[0] !== '-') {
        display.textContent = `-${value}`;
        displayValue = display.textContent;
        
    }

    if (value[0] === '-') {
        display.textContent = value.slice(1, value.length);
        displayValue = display.textContent

    }
}

function backspace() {
    displayValue = displayValue.toString().slice(0, displayValue.toString().length-1);
    display.textContent = displayValue;
}


//clears calc display and reset all values to defaults
function clear() {
    displayValue = 0;
    num1 = 0;
    num2 = 0;
    display.textContent = '';
}

// operate(power, 3, 5);//243


