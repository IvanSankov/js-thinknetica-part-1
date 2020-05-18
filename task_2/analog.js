// Реализовать аналог методов map и filter массива используя метод reduce массива

// filter
let inputFilter = [1,2,3,4,5,6];
let outputFilter = inputFilter.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        acc.push(curr)
    }

    return acc;
}, []);

// map
let inputMap = [1,2,3,4,5,6];
let outputMap = inputMap.reduce((acc, curr) => {
    acc.push(curr * curr);
    return acc;
}, []);


console.log(outputFilter);
console.log('----------');
console.log(outputMap);