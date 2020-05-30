'use strict';

// Итак, глянул на своем телефоне, как там работает калькулятор и реализовал такой же. Работает он по следующему
// принципу: вводим первое число, как только выбрали знак, скрипт будет ожидать следующее число, после его ввода,
// если нажать равно, будет результат, если нажать любой другой знак, то будет результат и платформа снова будет ждать
// второе число. Пример:
// 1. Вначале 0, вводим 12, нажимаем "+", платформа ждет второе слагаемое, вводим 3, жмем "=", получаем результат 15.
// 2. Вначале 0, вводим 12, нажимаем "+", платформа ждет второе слагаемое, вводим 3, жмем "*", получаем результат 15 и
// скрипт ждет второе второе число, на которое он умножит 15.


// Инициализируем переменные
const expression = {
    firstNumber: 0,
    sign: null,
    secondNumber: null,
};
const calculatorDisplay = document.getElementById('calculator-display');
const buttonsWrapper = document.getElementById('buttons-wrapper');


// Навешиваем события
buttonsWrapper.addEventListener('click', buttonClick);
document.addEventListener('keydown', keydown);


/**
 * Функция-обработчик нажатия клавиш на физической клавиатуре пользователя
 *
 * @param {KeyboardEvent} event
 */
function keydown(event) {
    const isInteger = !isNaN(parseInt(event.key));

    if (isInteger) {
        handlerNumber(event.key);
        return;
    }

    let sign = determineSignBy(event);
    if (sign !== '') {
        handlerSign(sign);
        markSign( document.querySelector(`[data-sign="${sign}"]`) );
    }
}

/**
 * Функция, определяющая по введенному символу, какому знаку калькулятора он соответствует
 *
 * @param {KeyboardEvent} event
 * @return {string}
 */
function determineSignBy(event) {
    const signs = ['+', '-', '/', '*', '='];

    if (signs.includes(event.key)) {
        return event.key
    }

    let sign = '';
    switch (event.code) {
        case 'Escape':
            sign = 'c';
            break;
        // В общем я тут хотел сделать, чтобы по нажатию Space или Enter у меня выводился результат, как будто бы я
        // нажимаю "=", однако из-за того, что у меня элементы типа button, Space и Enter помимо евента еще кликают на
        // последнюю нажатую кнопку, т.е. если мышкой нажать на button[data-number="1"], например, а потом нажимать
        // Space или Enter, то фокус же будет на этой кнопке и она будет кликаться. Поэтому эта часть закомментирвона.
        // Если элементы были бы другие, например, блоки (div) с кнопками, то все бы заработало, либо можно было бы
        // навесить на другую клавишу, скажем KeyZ или что-нибудь в этом духе, но не стал, вдруг будет не логично.
        //
        // case 'Space':
        //     sign = '=';
        //     break;
    }

    return sign
}

/**
 * Функция-обработчик события клик на кнопки виртуальной клавиатуры
 *
 * @param {MouseEvent} event
 */
function buttonClick(event) {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    if (event.target.dataset.number) {
        handlerNumber(event.target.dataset.number);
    } else if (event.target.dataset.sign) {
        handlerSign(event.target.dataset.sign);
        markSign(event.target);
    }
}

/**
 * Функция, обрабатывающая введенное число
 *
 * @param {string} strNumber
 */
function handlerNumber(strNumber) {
    let propertyNumber = 'firstNumber';
    if (expression.sign) {
        propertyNumber = 'secondNumber';
    }

    let resultNumber = strNumber;
    if (expression[propertyNumber] !== null) {
        const previousNumber = calculatorDisplay.innerText;
        resultNumber = previousNumber == 0 ? strNumber : previousNumber + strNumber;
    }
    calculatorDisplay.innerText = resultNumber;
    expression[propertyNumber] = +resultNumber;
}

/**
 * Функция, обрабатывающая выбранный символ (+,-,*,/,с,=)
 *
 * @param {string} sign
 */
function handlerSign(sign) {
    const operations = ['+', '-', '*', '/'];

    if (operations.includes(sign)) {
        if (expression.secondNumber !== null) {
            calculate();
        }

        expression.sign = sign;
        return;
    }

    if (sign === '=' && expression.secondNumber !== null) {
        calculate();
        return;
    }

    if (sign === 'c') {
        initExpression(0);
    }
}

/**
 * Функция, вычисляющая результат выражения, введенного пользователем
 */
function calculate() {
    let result;
    switch (expression.sign) {
        case '+':
            result = expression.firstNumber + expression.secondNumber;
            break;
        case '-':
            result = expression.firstNumber - expression.secondNumber;
            break;
        case '*':
            result = expression.firstNumber * expression.secondNumber;
            break;
        case '/':
            result = expression.firstNumber / expression.secondNumber;
            break;
    }

    initExpression(result);
}

/**
 * Функция инициализирующая переменную expression и отображающая значение expression.firstNumber в calculatorDisplay
 *
 * @param {Number} withFirstNumber
 */
function initExpression(withFirstNumber) {
    expression.firstNumber = withFirstNumber;
    expression.sign = null;
    expression.secondNumber = null;

    calculatorDisplay.innerText = withFirstNumber;
}

/**
 * Функция, помечающая (на виртуальной клавиатуре) выбранный символ (+,-,*,/,с,=)
 *
 * @param {HTMLButtonElement} element
 */
function markSign(element) {
    const markedItem = document.querySelector('.active-sign');
    if (markedItem) {
        markedItem.classList.remove('active-sign');
    }

    element.classList.add('active-sign');
}