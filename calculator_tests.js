// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    addDigit('1');
    addDigit('2');
    assert.deepEqual(document.getElementById("screen").value, "12", "Passed - Expected 12");
    current_input = "0";
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.deepEqual(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    current_input = "0";
});
//Test for changing signs
QUnit.test( "Change sign test", function( assert){
    addDigit('2');
    changeSign(current_input);
    assert.deepEqual(document.getElementById("screen").value, "-2", "Passed - Expected -2")
    current_input = "0";
});

//Test for finding the inverse of a #
QUnit.test( "Calculate inverse test", function( assert){
    addDigit('5');
    inverse(current_input);
    assert.deepEqual(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2")
    current_input = "0";
});
// Test for the factorial of a #
QUnit.test( "Find factorial test", function( assert){
    addDigit('4');
    factorial(current_input);
    assert.deepEqual(document.getElementById("screen").value, "24", "Passed - Expected 24")
    current_input = "0";
});
//Test the squaring function
QUnit.test( "Calculate the square", function( assert){
    addDigit('2');
    square(current_input);
    assert.deepEqual(document.getElementById("screen").value, "4", "Passed - Expected 4")
    current_input = "0";
})
// Test for finding turning number into a percentage
QUnit.test( "Finding percentage test", function ( assert){
    addDigit('42');
    percentage(current_input);
    assert.deepEqual(document.getElementById("screen").value, "0.42", "Passed - Expected 0.42")
     current_input = "0";
});

