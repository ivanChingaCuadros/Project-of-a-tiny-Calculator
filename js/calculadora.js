window.addEventListener('load', ()=> {
    const display  = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach( (button) => {
        button.addEventListener('click', ()=> {
            calculadora(button, display);
        })
    })
});
function calculadora(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;
    
        default:
            acutalizar(display, button);
            break;
    }
}
function calcular(display) {
    display.innerHTML = eval(display.innerHTML)
}
function acutalizar(display, button){
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML +=  button.innerHTML; 
    // Esto va ir poniendo cada numero que cliquemos al lado del otro dentro del display
}
function borrar(display){
    display.innerHTML = 0;
}