'use strict';

// Задаем все необходимые переменные
const settings = {backgroundColor: null};
let table = document.querySelector('table');
let input = document.getElementById('input-color');

// Навешиваем все события
input.addEventListener('keyup', keyup);
table.addEventListener('click', click);

// инициализируем данные
fillTable(table);
setBackgroundColor(input);


/**
 * Функция устанавливает цвет заливки
 * @param {HTMLInputElement} input
 */
function setBackgroundColor(input) {
    let target = document.getElementById(input.dataset.target);
    if (!target) {
        return;
    }

    target.style.backgroundColor = input.value;
    settings.backgroundColor = input.value;
}

/**
 * Функция-обработчик нажатие клавиши на поле input
 * @param {KeyboardEvent} event
 */
function keyup(event) {
    setBackgroundColor(event.target);
}

/**
 * Функция-обработчик события клик по таблице
 *
 * @param {MouseEvent} event
 */
function click(event) {
    if (event.target.tagName !== 'TD') {
        return;
    }

    if (event.shiftKey) {
        event.target.style.backgroundColor = 'transparent';
    } else {
        event.target.style.backgroundColor = settings.backgroundColor;
    }
}


/**
 * Функция для генерации таблицы
 *
 * @param {HTMLTableElement} table
 * @param {number} rowCount
 * @param {number} columnCount
 */
function fillTable(table, rowCount = 50, columnCount= 50) {

    for (let rowNumber = 0; rowNumber < rowCount; rowNumber++) {
        let tr = document.createElement('tr');
        for (let columnNumber = 0; columnNumber < columnCount; columnNumber++) {
            let td = document.createElement('td');
            tr.append(td);
        }
        table.append(tr);
    }
}