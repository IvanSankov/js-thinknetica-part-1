// Написать чистую функцию, которая принимает массив чисел и возвращает сумму и количество положительных
// элементов массива.

/**
 * Функция считает сумму положительных чисел в массиве и возворащает количество положительных элементов
 *
 * @param {Array} arr
 */
function sumOfPositive(arr) {
    if (!Array.isArray(arr)) {
        return 'error';
    }

    const copyArr = arr.filter(elem => !isNaN(elem));
    if (copyArr.length !== arr.length) {
        return 'error';
    }

    return copyArr.reduce((acc, curr) => {
        if (curr > 0) {
            acc.count++;
            acc.sum += curr;
        }

        return acc;
    }, {count: 0, sum: 0});
}