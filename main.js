let num1 =0;
let num2 = 0;
let operator ;
function add(num1, num2){
    return parseInt(num1) + parseInt(num2);
}
function sub(num1, num2){
    return parseInt( num1 )- parseInt(num2);
}
function multiply(num1, num2){
    return parseInt(num1) * parseInt(num2);
}
function div(num1, num2){
    return parseInt(num1) / parseInt(num2);
}

function display(num){
    let displayBox = document.getElementById('result');
    
    if(typeof num === 'string' && num !== '=') {
        operator = num;
    }
    if(num === '=') {
        let numbers = displayBox.value.split(operator);
        if(operator === '+') {
            displayBox.value = add(numbers[0], numbers[1]);  
        } else if(operator === '-') {
            displayBox.value = sub(numbers[0], numbers[1]);
        }else if(operator === '/') {
            displayBox.value = div(numbers[0], numbers[1]);
        }else if(operator === '*' ) {
            displayBox.value = multiply(numbers[0], numbers[1]);
        }
    } else {
        displayBox.value =displayBox.value+num;
    }
    if(num === 'AC'){
        displayBox.value = ' ';
    }

    
}