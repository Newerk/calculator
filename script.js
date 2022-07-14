let displayValue = undefined;
let numberIsDecimal = false;
let equalBtnPressed = false;
let display = document.querySelector('#display');

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
        return operate(this.operator, parseFloat(this.value1), parseFloat(this.value2));
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
        console.log(expression);
    })

});

let operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        numberIsDecimal = false;

        switch (e.target.id) {
            case 'add':
                if ('value1' in expression) {
                    evalMultipleOperations();
                } else {
                    storeNumOne();
                }
                expression['operator'] = '+';
                console.log(expression);

                break;

            case 'subtract':
                if ('value1' in expression) {
                    evalMultipleOperations();
                } else {
                    storeNumOne();
                }
                expression['operator'] = '-';
                console.log(expression);

                break;

            case 'multiply':
                if ('value1' in expression) {
                    evalMultipleOperations();
                } else {
                    storeNumOne();
                }
                expression['operator'] = '*';
                console.log(expression);

                break;

            case 'divide':
                if ('value1' in expression) {
                    evalMultipleOperations();
                } else {
                    storeNumOne();
                }
                expression['operator'] = '/';
                console.log(expression);

                break;

            case 'exponent':
                if ('value1' in expression) {
                    evalMultipleOperations();
                } else {
                    storeNumOne();
                }
                expression['operator'] = '^';
                console.log(expression);

                break;

            case 'equal':
                storeNumTwo()
                expression.evaluate();
                equalBtnPressed = false;
                console.log(expression);

        }
    })
});



let miscButtons = document.querySelectorAll('.misc');
miscButtons.forEach(btn => {
    btn.addEventListener('click', e => {

        switch (e.target.id) {
            case 'decimal':
                addDecimal();
                console.log(expression);

                break;

            case 'negative':
                negativeToggle();
                console.log(expression);

                break;

            case 'clear':
                clear();
                console.log(expression);

                break;

            case 'delete':
                backspace();
                console.log(expression);

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


        case '-':
            display.textContent = subtract(x, y);
            console.log(expression);

            return subtract(x, y);


        case '*':
            display.textContent = multiply(x, y);
            console.log(expression);

            return multiply(x, y);


        case '/':
            display.textContent = divide(x, y);
            console.log(expression);

            return divide(x, y);


        case '^':
            display.textContent = displayValue = power(x, y);
            console.log(expression);

            return power(x, y);

    }

};

function evalMultipleOperations() {
    storeNumTwo();
    expression.value1 = expression.evaluate()
    delete expression.value2;
    display.textContent = displayValue = undefined;
    console.log(expression);

}

function storeNumOne() {
    expression['value1'] = parseFloat(displayValue);
    console.log('storenumone used and setting v1 to displayValue' + expression['value1']);
    display.textContent = displayValue = undefined;
    console.log(expression);

}

function storeNumTwo() {
    expression['value2'] = parseFloat(displayValue);
    console.log('storenumTWO used and setting v2 to displayValue' + expression['value1']);

    console.log(expression);

}

function negativeToggle() {
    let value = displayValue;

    if (value[0] !== '-') {
        display.textContent = displayValue = '-' + value;
        console.log(expression);



    } else if (value[0] === '-') {
        display.textContent = displayValue = value.slice(1, value.length);
        console.log(expression);


    }
}

function addDecimal() {
    if (numberIsDecimal === false) {
        display.textContent = displayValue += '.';
        numberIsDecimal = true;
        console.log(expression);

    }
}

//deletes the n'th value of the number shown on the display. One more thing I want to do is have the entire display get cleared if a solution is returned after the equals button is clicked.
//if this deletes a decimal, it should reset numberIsDecimal to false so that the decimal can be reapplied whenever the user wants
function backspace() {
    display.textContent = displayValue = displayValue.slice(0, displayValue.length - 1);

    if (displayValue.includes('.')) {
        numberIsDecimal = true;

    } else if (displayValue.includes('.') === false) {
        numberIsDecimal = false;

    }
    console.log(expression);

}


//clears calc display and reset all values to defaults
function clear() {
    displayValue = undefined;
    display.textContent = undefined;
    numberIsDecimal = false;
    delete expression.value1;
    delete expression.operator;
    delete expression.value2;
    console.log(expression);


}


