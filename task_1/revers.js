// Постройте алгоритм реверсии слова

let input = prompt('Введите слово', '');
let output = '';
for(let i = input.length - 1; i > -1; i--) {
    output += input[i];
}

alert(output);