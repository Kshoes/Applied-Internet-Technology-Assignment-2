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

    if(n > 0){
        fn(args1, ...argsn);
        n--;
        betterCallFn(fn, n, args1, ...argsn);
    }

}

function opposite(oldFn) {

/*    return function fn(oldFn) {
        return !oldFn;
    };  */

    const newFn = oldFn => !oldFn;
    return newFn;
}

function bucket(arr, fn) {

    const arr1 = arr.filter(arr => fn(arr));
    const arr2 = arr.filter(arr => !fn(arr));

    return [arr1, arr2];
}

function addPermissions(oldFn) {

    function newFn(permissions, ...args) {

        if(permissions == null) {
            return undefined;
        }
        else if(!permissions.hasOwnProperty("admin")) {
            return undefined;
        }
        else if(permissions.admin === true) {
            return oldFn(...args);
        }
        else {
            return undefined;
        }
    }

    return newFn;
}

module.exports = {
    sum: sum,
    callFn: callFn,
    betterCallFn: betterCallFn,
    opposite: opposite,
    bucket: bucket,
    addPermissions: addPermissions,
    
}