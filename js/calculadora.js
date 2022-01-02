window.addEventListener('load', ()=>{
    const display  = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach( (button)) => {
        console.log(button)
    })
});