// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    addDigit('1');
    addDigit('2');
    assert.deepEqual(document.getElementById("screen").value, "12", "Passed - Expected 12");
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.deepEqual(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});
//Test for inputing digits
QUnit.test( "Change sign test", function( assert){
    addDigit('2');
    assert.deepEqual(document.getElementById("screen").value, "-2", "Passed - Expected -2")
})
