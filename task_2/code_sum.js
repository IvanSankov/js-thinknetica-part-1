// Написать функцию, которая принимает текст, и возвращает массив объектов со структурой

let input = 'Lorem ipsum dolor sit amet.';
let output = input.split(' ')
    .reduce((acc, curr) => {
        acc.push({word: curr, sum: codeSum(curr)});
        return acc
    }, []);

console.log(output);

/**
 * Функция для подсчета сумм кодов всех символов слова
 *
 * @param {string} word
 * @return {number}
 */
function codeSum(word) {
    let sum = 0;
    for (let index = 0; index < word.length; index++) {
        sum += word.charCodeAt(index);
    }

    return sum;
}