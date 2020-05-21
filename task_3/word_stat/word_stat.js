// Написать чистую функцию, которая принимает текст, и возвращает массив объектов со структурой

/**
 * Функция, которая принимает текст, и возвращает массив объектов со структурой
 * * word: само слово
 * * code: сумма кодов всех символов слова
 *
 * @param text
 * @return {Array}
 */
function wordStat(text) {
    if (!isString(text)) {
        return 'error';
    }

    if (text.length === 0 || text.trim().length === 0) {
        return [];
    }

    return text
        .split(' ')
        .reduce((acc, curr) => {
            if (curr.length === 0) {
                return acc;
            }

            acc.push(sumCharCodeOfWord(curr));
            return acc;
        }, []);
}

/**
 * Подсчет суммы кодов всех символов слова
 *
 * @param {string} word
 * @return {Object}
 */
function sumCharCodeOfWord(word) {
    if (!isString(word) || word.trim().split(' ').length !== 1) {
        return 'error'
    }

    if (word.length === 0 || word.trim().length === 0) {
        return {word: '', sum: 0};
    }

    return {
        word,
        sum: Array.from(word).reduce((acc, char) => acc + char.charCodeAt(0), 0)
    };
}

/**
 * Проверяет, является ли переменная строкой
 *
 * @param {string} variable
 * @return {boolean}
 */
function isString(variable) {
    return typeof variable === 'string';
}