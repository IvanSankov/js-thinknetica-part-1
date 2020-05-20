// ТЕСТЫ для "Написать чистую функцию, которая принимает массив чисел и возвращает сумму и количество положительных
// элементов массива."

describe('Тестируем функцию sumOfPositive', function () {

    it('Передаем строку "array"', function () {
        assert.equal(sumOfPositive('array'), 'error');
    });

    it('Передаем число "12"', function () {
        assert.equal(sumOfPositive(12), 'error');
    });

    it('Передаем объект "{}"', function () {
        assert.equal(sumOfPositive({}), 'error');
    });

    it('Передаем массив содержащий не только числа "[1, \'qwe\', {}, []]"', function () {
        assert.equal(sumOfPositive([1, "qwe", {}, []]), 'error');
    });

    it('Передаем массив "[-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]"', function () {
        assert.deepEqual(sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]), {count: 5, sum: 357});
    });

    it('Передаем пустой массив "[]"', function () {
        assert.deepEqual(sumOfPositive([]), {count: 0, sum: 0});
    });

    it('Передаем одно значение [0]', function () {
        assert.deepEqual(sumOfPositive([0]), {count: 0, sum: 0});
    });

    it('Передаем одно значение [1]', function () {
        assert.deepEqual(sumOfPositive([1]), {count: 1, sum: 1});
    });

    it('Передаем только отрицательные значения "[-1,-2,-3,-4,-10]"', function () {
        assert.deepEqual(sumOfPositive([-1,-2,-3,-4,-10]), {count: 0, sum: 0});
    });

    it('Передаем только положительные значения "[1,2,3,4,25, 10]"', function () {
        assert.deepEqual(sumOfPositive([1, 2, 3, 4, 25, 10]), {count: 6, sum: 45});
    });
});