let displayValue = "";
let a = "";
let b = "";
let operation = 'none';
let num = [];

const screen = document.querySelector("#screen");

const one = document.querySelector('#n1');
const two = document.querySelector('#n2');
const three = document.querySelector('#n3');
const four = document.querySelector('#n4');
const five = document.querySelector('#n5');
const six = document.querySelector('#n6');
const seven = document.querySelector('#n7');
const eight = document.querySelector('#n8');
const nine = document.querySelector('#n9');
const zero = document.querySelector('#n0');

const addOp = document.querySelector('#add');
const subOp = document.querySelector('#sub');
const multOp = document.querySelector('#mult');
const diviOp = document.querySelector('#divi');
const powOp = document.querySelector('#pow');
const equalsOp = document.querySelector('#equals');

const clear = document.querySelector('#clear');

// Functions for the operations

function add(a, b) {
    return +a + +b;
}

function sub(a, b) {
    return +a - +b;
}

function mult(a, b) {
    return +a * +b;
}

function divi(a, b) {
    return +a / +b;
}

function pow(a, b) {
    return Math.pow(+a, +b);
}

function operate(a, b, oper) {
    if (oper === '+') {
        return add(a, b)
    } else if (oper === '-') {
        return sub(a, b)
    } else if (oper === '*') {
        return mult(a, b)
    } else if (oper === '/') {
        return divi(a, b)
    } else if (oper === '**') {
        return pow(a, b)
    }
}

// Functions that the buttons do

function changeDisplayValue(a) {
    screen.textContent += a;
}

function clearDisplay() {
    screen.textContent = "";
}



// EventListeners

one.addEventListener('click', () => changeDisplayValue(1));
two.addEventListener('click', () => changeDisplayValue(2));
three.addEventListener('click', () => changeDisplayValue(3));
four.addEventListener('click', () => changeDisplayValue(4));
five.addEventListener('click', () => changeDisplayValue(5));
six.addEventListener('click', () => changeDisplayValue(6));
seven.addEventListener('click', () => changeDisplayValue(7));
eight.addEventListener('click', () => changeDisplayValue(8));
nine.addEventListener('click', () => changeDisplayValue(9));
zero.addEventListener('click', () => changeDisplayValue(0));

addOp.addEventListener('click', () => {
    screen.textContent += "\n";
    operation = '+';
});

subOp.addEventListener('click', () => {
    screen.textContent += "\n";
    operation = '-';
});

multOp.addEventListener('click', () => {
    screen.textContent += "\n";
    operation = '*';
});

diviOp.addEventListener('click', () => {
    screen.textContent += "\n";
    operation = '/';
});

powOp.addEventListener('click', () => {
    screen.textContent += "\n";
    operation = '**';
});

equalsOp.addEventListener('click', () => {
    num = screen.textContent.split('\n');
    displayValue = operate(num[0], num[1], operation);
    clearDisplay();
    changeDisplayValue(displayValue);
});

clear.addEventListener('click', () => clearDisplay());

