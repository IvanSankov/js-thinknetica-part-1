// ТЕСТЫ: Реализовать аналог методов filter

describe('Тестируем функцию filterByReduce', function () {
    it('Ничего не передаем в функцию', function () {
        assert.equal(filterByReduce(), 'error');
    });

    it('Передаем в функцию только первый агрумент', function () {
        assert.equal(filterByReduce([1, 2,]), 'error');
    });

    it('Передаем в функцию массив "[1,2]" и число "1"', function () {
        assert.equal(filterByReduce([1, 2,], 1), 'error');
    });

    it('Передаем в функцию массив "[1,3]" и строку "function"', function () {
        assert.equal(filterByReduce([1, 3], 'function'), 'error')
    });

    it('Передаем в функцию число "1" и строку "function"', function () {
        assert.equal(filterByReduce(1, 'function'), 'error')
    });

    it('Передаем в функцию число "1" и строку "(x) => x > 2"', function () {
        assert.equal(filterByReduce(1, (x) => x > 2), 'error')
    });

    it('Передаем в функцию объект "{\'q\': 1, \'w\': 2}" и строку "(x) => x > 2"', function () {
        assert.equal(filterByReduce({'q': 1, 'w': 2}, (x) => x > 2), 'error')
    });

    it('Передаем в функцию массив "[1,3]" и функцию "(x) => x > 2"', function () {
        assert.deepEqual(filterByReduce([1, 3], (x) => x > 2), [3]);
    });

    it('Передаем в функцию массив "[\'Hello\',\'Word\']" и функцию "(x) => x.length > 100"', function () {
        assert.deepEqual(filterByReduce(['Hello','Word'], (x) => x.length > 100), []);
    });

    it('Передаем пустой массив "[]" и функцию "(x) => true"', function () {
        assert.deepEqual(filterByReduce([], (x) => true), []);
    });

    it('Передаем пустой массив "[1,2,3,[3,4,5],]" и функцию "(x) => true"', function () {
        assert.deepEqual(filterByReduce([1,2,3,[3,4,5],], (x) => true), [1,2,3,[3,4,5],]);
    });

    it('Передаем пустой массив "[{}, \'qwe\', 1]" и функцию "(x) => false"', function () {
        assert.deepEqual(filterByReduce([{}, 'qwe', 1], (x) => false), []);
    });
});