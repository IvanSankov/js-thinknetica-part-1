// Написать функцию, которая принимает массив чисел и возвращает сумму и количество отрицательных элементов массива.

let input = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];
let output = input.reduce((acc, curr) => {
    if (curr < 0) {
        acc.count++;
        acc.sum += curr;
    }

    return acc;

}, {count: 0, sum: 0});

console.log(output);