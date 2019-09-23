// hoffy.js

function sum(num1, num2, ...numn) {

    if(arguments.length == 0) {
        return 0;
    }
    if(arguments.length == 1) {
        return num1;
    }

    const sum = numn.reduce(function(acc, currentVal) {
        return acc + currentVal;
    }, num1+num2);

    return sum;
}

function callFn(fn, n, arg) {
    if(n > 0){
        fn(arg);
        n--;
        callFn(fn, n, arg);
    }
}

function betterCallFn(fn, n, args1, ...argsn) {

}

module.exports = {
    sum: sum,
    callFn: callFn,
    betterCallFn: betterCallFn
}