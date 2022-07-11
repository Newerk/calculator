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
        // console.log(displayValue);
        // console.log(displayValue.toString()[3])
    })

});

// let operatorButtons = document.querySelectorAll('.operators');
// operatorButtons.forEach(btn => {
//     btn.addEventListener('click', e => {
//         let x = displayValue;
//         console.log(num1);

        // switch (e.target.id) {
        //     case "add":

        //         break;
        //     case "subtract":

        //         break;
        //     case "multiply":

        //         break;
        //     case "divide":

        //         break;
        //     case "power":

        //         break;

        //     default:
        //         break;
        // }
//     })
// })

let negBtn = document.querySelector('#pos-or-neg');
negBtn.addEventListener('click', negativeToggle);

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear);




const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const power = (x, y) => Math.pow(x, y);


const operate = (operator, x, y) => {

    switch (operator) {
        case add:
            clear();
            num2 = displayValue;
            display.textContent = add(x, num2);

            break;
        case subtract:
            clear();
            num2 = displayValue;
            display.textContent = subtract(x, y);

            break;
        case multiply:
            clear();
            num2 = displayValue;
            display.textContent = multiply(x, y);

            break;
        case divide:
            clear();
            num2 = displayValue;
            display.textContent = divide(x, y);

            break;

        case power:
            clear();
            num2 = displayValue;
            display.textContent = power(x, y);

            break;

        default:
            alert('Not an operator button');
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
    // console.log(displayValue);
}



//clears calc display and reset all values to defaults
function clear() {
    displayValue = 0;
    num1 = 0;
    num2 = 0;
    display.textContent = '';
}

// operate(power, 3, 5);//243


