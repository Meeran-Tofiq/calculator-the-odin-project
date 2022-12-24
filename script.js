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