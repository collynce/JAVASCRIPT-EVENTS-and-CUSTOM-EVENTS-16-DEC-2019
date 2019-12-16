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

//Custom Events
function myCustomEvent() {
    let elem;
    let event = new Event("event");
    document.getElementById('custom_event').dispatchEvent(event);
    document.getElementById('custom_event').addEventListener('event', function(){
        console.log('This is my custom event...!!');
    });
}
myCustomEvent();

//Dynamic Typing
function dataTyping() {
    const x = true;
    if (x){
        console.log('This is a true event');

    }else {
        console.log('This is a false event');
    }

    let i=0;
    for (i; i<10; i++){
        console.log('This is a loop')
    }

}
dataTyping();