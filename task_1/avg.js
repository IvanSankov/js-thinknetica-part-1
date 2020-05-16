// Среднее арифметическое

let counter = 0;
let sum = 0;
let avg = 0;

while (true) {
    let input = parseFloat(prompt('Введите число', ''));
    if (isNaN(input)) {
        break;
    }

    ++counter;
    sum += input;
    avg = sum / counter;
    console.log(`Промежуточное значение: sum: ${sum}, counter: ${counter}, avg: ${avg}`);
}

alert(`Финальное значение: sum: ${sum}, counter: ${counter}, avg: ${avg}`);