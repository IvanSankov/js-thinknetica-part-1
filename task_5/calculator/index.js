'use strict';

// Инициализируем переменные
const outputTag = document.querySelector('h1');
const form = document.getElementById('calculator-form');
const formInput = document.getElementById('calculator-form-input');
const buttonsWrapper = document.getElementById('buttons-wrapper');


// Инициализируем все события
form.addEventListener('submit', submit);
buttonsWrapper.addEventListener('click', click);


/**
 * Функция-обработчик события submit формы
 *
 * @param {Event} event
 */
function submit(event) {
    event.preventDefault();
    calculate();
}

/**
 * Функция-обработчик события клика на кнопку виртуальной клавиатуры
 *
 * @param {MouseEvent} event
 */
function click(event) {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    if (event.target.dataset.number !== undefined || event.target.dataset.sign !== undefined) {
        formInput.value = formInput.value + event.target.innerText;
    } else if (event.target.dataset.reset !== undefined) {
        init();
    } else if (event.target.dataset.result !== undefined) {
        calculate();
    }
}

/**
 * Функция подсчета введенного выражения
 *
 * * Проверяет, что строка валидна, валидной строкой считается строка, где присутствует ровно один знак: +,-,*,/
 */
function calculate() {
    const inputString = formInput.value;
    const matches = inputString.match(/[\+\-\/\*]/g) || [];

    if (matches.length !== 1) {
        alert('Извините, я могу вычислить выражения содержащие ровно один из знаков: +,-,*,/');
        return;
    }

    const inputValues = inputString.split(matches[0]).map(elem => +elem);
    let result = NaN;

    switch (matches[0]) {
        case '+':
            result = inputValues[0] + inputValues[1];
            break;
        case '-':
            result = inputValues[0] - inputValues[1];
            break;
        case '*':
            result = inputValues[0] * inputValues[1];
            break;
        case '/':
            try {
                result = inputValues[0] / inputValues[1];
            } catch (e) {}
            break;
    }

    if (isNaN(result)) {
        alert('Введены некорректные значения');
        return;
    }

    init(result);
}

/**
 * Функция, сбрасывает форму и устанавливае результат равный result
 *
 * @param {number} result
 */
function init(result = 0) {
    outputTag.innerText = `Результат: ${result}`;
    form.reset();
}