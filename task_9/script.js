'use strict';

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 5000);
});

const pr1 = promise.then((value) => {
    console.log(value);
    return value + 1;
});

promise.then((value) => {
    console.log(value);
    return value + 1;
});

promise.then((value) => {
    console.log(value);
    return value + 1;
});

promise.then((value) => {
    console.log('++++', value);
    return value + 1;
}).then((value) => {
    console.log(value);
    return value + 1;
}).then((value) => {
    console.log(value);
    return value + 1;
});

console.log(pr1);
console.log(promise);
console.log(promise === pr1);

/********************* CUSTOM PROMISE *********************/

console.log('');
console.log('********************* CUSTOM PROMISE *********************');
console.log('');

const customPromise = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        console.log('run');
        resolve(2);
    }, 5000);
});

const customPr1 = customPromise.then((value) => {
    console.log(value);
    return value + 1;
});

customPromise.then((value) => {
    console.log(value);
    return value + 1;
});

customPromise.then((value) => {
    console.log(value);
    return value + 1;
});

customPromise.then((value) => {
    console.log('++++', value);
    return value + 1;
}).then((value) => {
    console.log(value);
    return value + 1;
}).then((value) => {
    console.log(value);
    return value + 1;
});

console.log(customPr1);
console.log(customPromise);
console.log(customPromise === customPr1);

/********************* Example PROMISE *********************/

// console.log('');
// console.log('********************* EXAMPLE PROMISE *********************');
// console.log('');
//
// const exPromise = new ExamplePromise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('------------------------')
//         console.log('run')
//         console.log('------------------------')
//         resolve(2);
//     }, 5000);
// });
//
// const exPr1 = exPromise.then((value) => {
//     console.log(value);
//     return value + 1;
// });
//
// exPromise.then((value) => {
//     console.log(value);
//     return value + 1;
// });
//
// exPromise.then((value) => {
//     console.log(value);
//     return value + 1;
// });
//
// exPromise.then((value) => {
//     console.log('++++', value);
//     return value + 1;
// }).then((value) => {
//     console.log(value);
//     return value + 1;
// }).then((value) => {
//     console.log(value);
//     return value + 1;
// });
//
// console.log('exPr1', exPr1);
// console.log('exPromise', exPromise);
// console.log(exPromise === exPr1);