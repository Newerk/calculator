var displayValue = '';
var num1 = 0;
var num2 = 0;
var numberIsDecimal = false;
console.log(numberIsDecimal);

var display = document.querySelector('#display');

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const power = (x, y) => Math.pow(x, y);

//When number buttons are pressed, it is displayed on the calc in the order they were selected
let numButtons = document.querySelectorAll('.numbers');
numButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        display.textContent += e.target.textContent;
        displayValue = display.textContent;
    })

});

let operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach(btn => {
    btn.addEventListener('click', e => {

        switch (e.target.id) {
            case 'add':
                storeNumOne();
                num1 += '+';


                break;
            case 'subtract':
                storeNumOne();

                num1 += '-';


                break;
            case 'multiply':
                storeNumOne();

                num1 += '*';


                break;
            case 'divide':
                storeNumOne();

                num1 += '/';


                break;
            case 'exponent':
                storeNumOne();
                num1 += '^';



                break;
            case 'equal':
                let getOperator = num1.toString().slice(num1.toString().length - 1, num1.toString().length);
                num2 = display.textContent = displayValue;
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);

                switch (getOperator) {
                    case '+': 
                        operate('+', num1, num2);

                        break;
                    case '-':
                        operate('-', num1, num2);

                        break
                    case '*':
                        operate('*', num1, num2);

                        break
                    case '/':
                        operate('/', num1, num2);

                        break
                    case '^':
                        operate('^', num1, num2);

                        break
                }


                break;

            default:
                alert('clicked on the whitespace')
                break;
        }
    })
})


let miscButtons = document.querySelectorAll('.misc');
miscButtons.forEach(btn => {
    btn.addEventListener('click', e => {

        switch (e.target.id) {
            case 'decimal':
                addDecimal();
                break;

            case 'negative':
                negativeToggle();
                break;

            case 'clear':
                clear();
                break;

            case 'delete':
                backspace();
                break;

        }
    });
});

const operate = (operator, x, y) => {
    // let result = 0;
    parseInt(num1);
    parseInt(num2);

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
            alert('clicked on the whitespace');
            break;
    }

};

function storeNumOne() {
    num1 = displayValue;
    display.textContent = displayValue = '';
    // console.log(num1);
}

// function removeOperator() {
//     num1.
    
// }

function negativeToggle() {
    let value = displayValue;

    if (value[0] !== '-') {
        display.textContent = displayValue = `-${value}`;


    } else if (value[0] === '-') {
        display.textContent = displayValue = value.slice(1, value.length);

    }
}

function addDecimal() {
    if (numberIsDecimal === false) {
        display.textContent = displayValue += '.';
        numberIsDecimal = true;
    }
}

//deletes the n'th value of the number shown on the display. One more thing I want to do is have the entire display get cleared if a solution is returned after the equals button is clicked.
//if this deletes a decimal, it should reset numberIsDecimal to false so that the decimal can be reapplied whenever the user wants
function backspace() {
    display.textContent = displayValue = displayValue.slice(0, displayValue.length - 1);

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


