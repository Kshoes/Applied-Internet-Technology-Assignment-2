// hoffy.js
const fs = require('fs');

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

function myReadFile(fileName, successFn, errorFn) {

    //const success = data => successFn(data);
    //const failure = err => errorFn(err);

    fs.readFile(fileName, 'utf-8', function(err, data) {
        if(err) {
            return errorFn(err);
        }
        else {
            return successFn(data);
        }
    });
    //fs.readFile('filename.txt', 'utf-8', callback)

}

function readAndExtractWith(extractor) {

     function f(fileName, successFn, errorFn){

        fs.readFile(fileName, 'utf-8', function(err, data) {
            if(err) {
                return errorFn(err);
            }
            else {
                return successFn(extractor(data));
            }
        });
     }

     return f;
}

function rowsToObjects(data) {

    const headers = data.headers;
    const rows = data.rows;

    return rows.reduce((arr, element, index) =>  {
        arr.push(headers.reduce((row, header, index) => {row[header] = element[index]; return row; }, {}))
        return arr;
    }, []);
}

module.exports = {
    sum: sum,
    callFn: callFn,
    betterCallFn: betterCallFn,
    opposite: opposite,
    bucket: bucket,
    addPermissions: addPermissions,
    myReadFile: myReadFile,
    readAndExtractWith: readAndExtractWith,
    rowsToObjects: rowsToObjects
}