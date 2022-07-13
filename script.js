var displayValue = '';

var numberIsDecimal = false;
console.log(numberIsDecimal);

var display = document.querySelector('#display');

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const power = (x, y) => Math.pow(x, y);

/*
calculatable expressions will be built based on button clicks. 
related information will be stored here: 
number left of expression(value1), number right of expression(value2), operator used to calculate expression(operator) */
let expression = {
    evaluate() {
        if (Object.keys(expression).length === 4) {
            this.value1 = operate(this.operator, parseFloat(this.value1), parseFloat(this.value2));
            delete this.value2;
            delete this.operator;

    } else if (Object.keys(expression).length < 4) {
            storeNumTwo();
            operate(this.operator, parseFloat(this.value1), parseFloat(this.value2));
        }
    }
};

//When number buttons are pressed, it is displayed on the calc in the order they were selected
let numButtons = document.querySelectorAll('.numbers');
numButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target != e.currentTarget) {
            display.textContent += e.target.textContent;
            displayValue = display.textContent;
        }
    })

});

let operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        numberIsDecimal = false;
        // evalMultiOperators();

        switch (e.target.id) {
            case 'add':
                storeNumOne();
                expression['operator'] = '+';

                break;

            case 'subtract':
                storeNumOne();
                expression['operator'] = '-';
                break;

            case 'multiply':
                storeNumOne();
                expression['operator'] = '*';
                break;

            case 'divide':
                storeNumOne();
                expression['operator'] = '/';
                break;

            case 'exponent':
                storeNumOne();
                expression['operator'] = '^';
                break;

            case 'equal':
                expression.evaluate();
                console.log(display.textContent);
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
    switch (operator) {
        case '+':
            display.textContent = add(x, y);
            console.log(expression);
            return add(x, y);


            // break;
        case '-':
            display.textContent = subtract(x, y);
            console.log(expression);

            return subtract(x, y);


            // break;
        case '*':
            display.textContent = multiply(x, y);
            console.log(expression);
            return multiply(x, y);


            // break;
        case '/':
            display.textContent = divide(x, y);
            console.log(expression);
            return divide(x, y);



            // break;

        case '^':
            display.textContent = displayValue = power(x, y);
            console.log(expression);
            return power(x, y);



            // break;
    }

};


function storeNumOne() {
    expression['value1'] = displayValue;
    display.textContent = displayValue = '';

}

function storeNumTwo() {
    expression['value2'] = displayValue;

}

function negativeToggle() {
    let value = displayValue;

    if (value[0] !== '-') {
        display.textContent = displayValue = '-' + value;


    } else if (value[0] === '-') {
        display.textContent = displayValue = value.slice(1, value.length);

    }
}

function addDecimal() {
    if (numberIsDecimal === false) {
        display.textContent = displayValue += '.';
        numberIsDecimal = true;
    }
    console.log(numberIsDecimal);
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
    displayValue = '';
    display.textContent = '';
    numberIsDecimal = false;
    delete expression.value1;
    delete expression.operator;
    delete expression.value2;
}


