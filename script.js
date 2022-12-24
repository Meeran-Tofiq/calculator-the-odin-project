let displayValue = "";
let a = "";
let b = "";

const one = document.querySelector('#1');
const two = document.querySelector('#2');
const three = document.querySelector('#3');
const four = document.querySelector('#4');
const five = document.querySelector('#5');
const six = document.querySelector('#6');
const seven = document.querySelector('#7');
const eight = document.querySelector('#8');
const nine = document.querySelector('#9');
const zero = document.querySelector('#0');

const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const mult = document.querySelector('#mult');
const divi = document.querySelector('#divi');
const pow = document.querySelector('#pow');
const equals = document.querySelector('#equals');

const clear = document.querySelector('#clear');

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
    if(oper === '+') {
        return add(a, b)
    } else if(oper === '-') {
        return sub(a, b)
    } else if(oper === '*') {
        return mult(a, b)
    } else if(oper === '/') {
        return divi(a, b)
    } else if(oper === '^') {
        return pow(a, b)
    }
}