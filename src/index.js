'use strict';


//On click
function showAlert() {
    alert('Hello there!!')
}

//On change
function showText() {
    function updateText(e) {
        console.log('I have been checked');
    }
    return updateText();
}