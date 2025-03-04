//shot-circuit

//False
//false
// 0
// **
//null
//undefined
//NaN

let nombre = '';
let username = nombre || 'anonimo ';
console.log(username);


let nombre1 = 'carmari';
let username1 = nombre1 || 'anonimo ';
console.log(username1);


function fn1() {
    console.log('soy funcion 1')
    return true;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();

function fn3() {
    console.log('soy funcion 3')
    return false;
}

function fn4() {
    console.log('soy funcion 4');
    return true;
}

let y = fn3() && fn4();