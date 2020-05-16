// Напишите программу, позволяющую удалить все лишние пробелы в тексте оставив по одному.

const keyCodeSpace = ' '.charCodeAt(0);

let input = prompt('Введите слово', '');
let output = '';

input = input.trim();
for (let i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) !== keyCodeSpace || output.charCodeAt(output.length - 1) !== keyCodeSpace) {
        output += input[i];
    }
}

alert(`Результат: ${output}`);