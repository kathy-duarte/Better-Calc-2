var current_input = "0";
var memory = "0";
var operator = 0;
/**
 * Helper function for displaying the current input
 */
function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}
/**
 * Adds a digit to the current input
 * @param {string} dig This is the displayed number
 */
function addDigit(dig) {
    if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    }
    else {
        current_input = current_input + dig;
    }
    displayCurrentInput();
}
//
/**
 * Adds a decimal to the current input
 */
function addDecimal() {
    if (current_input.length == 0) {
        //no leading ".", use "0."
        current_input = "0.";
    }
    else {
        if (current_input.indexOf(".") == -1) {
            current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}
/**
 * Clears everything
 */
function allClear() {
    current_input = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 * Stores the last operator pushed for multiply, divide, add, or subtract
 * @param {string} op Represents the operator
 */
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        operator = 1;
    }; //codes for *
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    memory = current_input; //store value
    current_input = "0";
    displayCurrentInput();
}
/**
 * Calculate using operator, the memory and what is current
 */
function calculate() {
    if (operator == 1) {
        current_input = eval(memory) * eval(current_input);
    };
    if (operator == 2) {
        current_input = eval(memory) / eval(current_input);
    };
    if (operator == 3) {
        current_input = eval(memory) + eval(current_input);
    };
    if (operator == 4) {
        current_input = eval(memory) - eval(current_input);
    };
    var initial_value = current_input.toString();
    if (initial_value == "Infinity") {
        current_input = "Divide by Zero Error"
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 * Change the sign of the current input
 */
function changeSign() {
    current_input = current_input * -1;
    displayCurrentInput();
}
/**
 * Clear the current input back to 0
 */
function clearCurrent() {
    current_input = "0";
    displayCurrentInput();
}
/**
 * Divides 1 by current input
 */
function inverse() {
    current_input = 1 / current_input;
    displayCurrentInput();
}
/**
 * Runs current input through a factorial
 */
function factorial() {
    var result = 1;
    for (i = current_input; i > 0; i--) {
        result = result * i;
        console.log(result);
    }
    current_input = result;
    displayCurrentInput();
}
/**
 * Squares current input
 */
function square() {
    console.log(current_input);
    current_input = Math.pow(eval(current_input), 2);
    console.log(current_input);
    displayCurrentInput();
}
/**
 * Square roots current number
 */
function squareRoot() {
    console.log(current_input);
    current_input = Math.sqrt(current_input);
    console.log(current_input);
    displayCurrentInput();
}
/**
 * Turns current number into a percentage
 */
function percentage() {
    current_input = (current_input / 100);
    console.log(current_input);
    displayCurrentInput();
}
