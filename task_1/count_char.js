// Подсчет количества гласных и согласных в строке

let input = prompt('Введите строку', '');

const keyCodeA = 'a'.charCodeAt(0);
const keyCodeE = 'e'.charCodeAt(0);
const keyCodeY = 'y'.charCodeAt(0);
const keyCodeU = 'u'.charCodeAt(0);
const keyCodeI = 'i'.charCodeAt(0);
const keyCodeO = 'o'.charCodeAt(0);

let vowelsCounter = 0; // a, e, y, u, i, o
let consonantsCounter = 0;

inputLowerCase = input.toLowerCase();

for (let index = 0; index < inputLowerCase.length; index++) {
    let characterCode = input.charCodeAt(index);
    let code = characterCode - keyCodeA;
    if (code >= 0 && code < 26) {
        if (characterCode === keyCodeA || characterCode === keyCodeE
            || characterCode === keyCodeY || characterCode === keyCodeU
            || characterCode === keyCodeI || characterCode === keyCodeO) {
            vowelsCounter++;
        } else {
            consonantsCounter++;
        }
    }
}

alert(`Гласных: ${vowelsCounter}; Согласных: ${consonantsCounter}`);