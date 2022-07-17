let displayValue = undefined;
let numberIsDecimal = false;
let equalBtnUsed = false;
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
        display.textContent += e.target.textContent;
        displayValue = display.textContent;

        if (equalBtnUsed === true) {
            console.log(`= button used`);
            storeNumOne();
            delete expression.value2;
            delete expression.operator;
            console.log(`${displayValue} store in value 1`);
            console.log(expression);
        }

        equalBtnUsed = false;

    })

});

let operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        numberIsDecimal = false;
        equalBtnUsed = false;

        switch (e.target.id) {
            case 'add':
                if (displayValue === undefined) {
                    return;
                }
                determineInputBehavior();

                if ('operator' in expression) {
                    expression.value1 = expression.evaluate();
                    display.textContent += expression.operator = '+';
                    return;
                }

                expression['operator'] = '+';
                display.textContent += expression['operator'];
                break;

            case 'subtract':
                if (displayValue === undefined) {
                    return;
                }
                determineInputBehavior();

                if ('operator' in expression) {
                    expression.value1 = expression.evaluate();
                    display.textContent += expression.operator = '-';
                    return;
                }

                expression['operator'] = '-';
                display.textContent += expression['operator'];

                console.log(`subtracted used`);
                break;

            case 'multiply':
                if (displayValue === undefined) {
                    return;
                }
                determineInputBehavior();

                if ('operator' in expression) {
                    expression.value1 = expression.evaluate();
                    display.textContent += expression.operator = '*';
                    return;
                }

                expression['operator'] = '*';
                display.textContent += expression['operator'];
                break;

            case 'divide':
                if (displayValue === undefined) {
                    return;
                }
                determineInputBehavior();

                if ('operator' in expression) {
                    expression.value1 = expression.evaluate();
                    display.textContent += expression.operator = '/';
                    return;
                }

                expression['operator'] = '/';
                display.textContent += expression['operator'];
                break;

            case 'exponent':
                if (displayValue === undefined) {
                    return;
                }
                determineInputBehavior();

                if ('operator' in expression) {
                    expression.value1 = expression.evaluate();
                    display.textContent += expression.operator = '^';
                    return;
                }

                expression['operator'] = '^';
                display.textContent += expression['operator'];
                break;

        }
        console.log(expression);

    })

});



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

            case 'equal':
                if (displayValue === undefined) {
                    return;
                }
                determineInputBehavior();
                expression.evaluate();
                clearExpression();
                equalBtnUsed = true;
                break;

        }
        console.log(expression);

    });
});

const operate = (operator, x, y) => {
    switch (operator) {
        case '+':
            display.textContent = add(x, y);

            return add(x, y);


        case '-':
            display.textContent = subtract(x, y);

            return subtract(x, y);


        case '*':
            display.textContent = multiply(x, y);

            return multiply(x, y);


        case '/':
            display.textContent = divide(x, y);

            return divide(x, y);


        case '^':
            display.textContent = power(x, y);

            return power(x, y);

    }
    console.log(expression);


};

function determineInputBehavior() {
        ('value1' in expression && 'operator' in expression) ? storeNumTwo() : storeNumOne();
}



function storeNumOne() {
    expression['value1'] = parseFloat(display.textContent);
    console.log(`${displayValue} stored in value 1`)

}

function storeNumTwo() {
    expression.value2 = parseFloat(display.textContent.substring(display.textContent.lastIndexOf(expression.operator) + 1));
    console.log(`display value when stored in num2 = ${displayValue}`)

    // expression['value2'] = displayValue;
    console.log(`${expression['value2']} stored in value 2`)



}

function negativeToggle() {
    if (displayValue === undefined) {
        return;

    }
    else if (Math.sign(display.textContent) === 1 && equalBtnUsed === true) {
        clearExpression();
        display.textContent *= -1;
        displayValue = display.textContent;
        parseFloat(displayValue);

    } else if (Math.sign(display.textContent) === -1 && equalBtnUsed === true) {
        clearExpression();
        display.textContent *= -1;
        displayValue = display.textContent;
        parseFloat(displayValue);


    }
    else if (Math.sign(display.textContent) === 1) {
        display.textContent *= -1;
        displayValue = display.textContent;
        parseFloat(displayValue);




    } else if (Math.sign(display.textContent) === -1) {
        display.textContent *= -1;
        displayValue = display.textContent;
        parseFloat(displayValue);

    }


    console.log(`display value is : ${display.textContent}`)
    console.log(expression);


}

function addDecimal() {
    displayValue = display.textContent += '.';
    parseFloat(displayValue);
    if (numberIsDecimal === false) {
        if (displayValue === undefined) {
            displayValue = 0;
        }


        numberIsDecimal = true;

    }
    console.log(expression);

}

//deletes the n'th value of the number shown on the display. One more thing I want to 
//if this deletes a decimal, it should reset numberIsDecimal to false so that the decimal can be reapplied whenever the user wants
function backspace() {
    display.textContent = displayValue = display.textContent.slice(0, -1);
    clearExpression();

    if (displayValue.includes('.')) {
        numberIsDecimal = true;

    } else if (displayValue.includes('.') === false) {
        numberIsDecimal = false;

    }
    parseFloat(displayValue);

    console.log(expression);

}


//clears calc display and reset all values to defaults
function clear() {

    displayValue = undefined;
    numberIsDecimal = false;
    equalBtnUsed = false;

    display.textContent = undefined;
    delete expression.value1;
    delete expression.operator;
    delete expression.value2;
    console.log(expression);

}

function clearExpression() {
    delete expression.value1;
    delete expression.operator;
    delete expression.value2;
}



