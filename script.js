var displayValue = '';
var num1 = 0;
var num2 = 0;
var numberIsDecimal = false;
console.log(numberIsDecimal);

var display = document.querySelector('#display');

//When number buttons are pressed, it is displayed on the calc in the order they were selected
let numButtons = document.querySelectorAll('.numbers');
numButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        display.textContent += e.target.textContent;
        displayValue = display.textContent;
    })

});

// let operatorButtons = document.querySelectorAll('.operators');
// operatorButtons.forEach(btn => {
//     btn.addEventListener('click', e => {

//     })
// })


//there is an unintended interaction with the period button. when there is a period in the display, pressing the negative button removes the period
let miscButtons = document.querySelectorAll('.misc');
miscButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target.id === 'period') {
            if (numberIsDecimal === false) {
                displayValue += '.';
                display.textContent = displayValue;
                numberIsDecimal = true;
            }
            console.log(numberIsDecimal);


        } else if (e.target.id === 'negative') {
            negativeToggle();

        } else if (e.target.id === 'clear') {
            clear();

        } else if (e.target.id === 'delete') {
            backspace();

        }
    });
});



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
    // if (condition) {

    // } else if (condition) {


    // }

}

//deletes the n'th value of the number shown on the display. One more thing I want to do is have the entire display get cleared if a solution is returned after the equals button is clicked.
//if this deletes a period, it should reset numberIsDecimal to false so that the period can be reapplied whenever the user wants
function backspace() {
    displayValue = displayValue.toString().slice(0, displayValue.toString().length - 1);
    display.textContent = displayValue;

    if (displayValue.includes('.')) {
        numberIsDecimal = true;
        console.log(numberIsDecimal);

    } else if (displayValue.includes('.') === false) {
        numberIsDecimal = false;
        console.log(numberIsDecimal);

    }
}


//clears calc display and reset all values to defaults
function clear() {
    displayValue = 0;
    num1 = 0;
    num2 = 0;
    display.textContent = '';
    numberIsDecimal = false;
}


