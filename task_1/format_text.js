//  Форматирование текста.

let input = prompt('Введите строку', '');
input = input.trim();

let output = '';
let maxLength = 5;
let startSpacePosition = 0;
let prevSpacePosition = 0;
let counter = 0;
while (counter < input.length) {
    counter++;
    let currentSpacePosition = input.indexOf(' ', prevSpacePosition + 1);
    if (currentSpacePosition === -1) {
        if (input.substr(startSpacePosition, input.length - startSpacePosition).length <= maxLength) {
            output += input.substr(startSpacePosition, input.length - startSpacePosition).trim() + '\n';
        } else if (input.substr(prevSpacePosition, input.length - prevSpacePosition).length <= maxLength) {
            output += input.substr(startSpacePosition, prevSpacePosition - startSpacePosition).trim() + '\n';
            output += input.substr(prevSpacePosition, input.length - prevSpacePosition).trim() + '\n';
        } else {
            alert(`Нельзя распарсить строку, так как есть слово большее ${maxLength}`);
        }

        break;
    }

    if (currentSpacePosition - startSpacePosition > maxLength) {
        if (prevSpacePosition === startSpacePosition) {
            alert(`Нельзя распарсить строку, так как есть слово большее ${maxLength}`);
            break;
        }

        output += input.substr(startSpacePosition, prevSpacePosition - startSpacePosition).trim() + '\n';
        startSpacePosition = prevSpacePosition + 1;
    } else {
        prevSpacePosition = currentSpacePosition;
    }
}

alert(output);