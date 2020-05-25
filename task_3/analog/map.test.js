// ТЕСТЫ: Реализовать аналог метода map

describe('Тестируем функцию mapByReduce', function () {
    it('Ничего не передаем в функцию', function () {
        assert.equal(mapByReduce(), 'error');
    });

    it('Передаем в функцию только первый агрумент', function () {
        assert.equal(mapByReduce([1, 2,]), 'error');
    });

    it('Передаем в функцию массив "[1,2]" и число "1"', function () {
        assert.equal(mapByReduce([1, 2,], 1), 'error');
    });

    it('Передаем в функцию массив "[1,3]" и строку "function"', function () {
        assert.equal(mapByReduce([1, 3], 'function'), 'error')
    });

    it('Передаем в функцию число "1" и строку "function"', function () {
        assert.equal(mapByReduce(1, 'function'), 'error')
    });

    it('Передаем в функцию число "1" и строку "(x) => x ** 2"', function () {
        assert.equal(mapByReduce(1, (x) => x ** 2), 'error')
    });

    it('Передаем в функцию объект "{\'q\': 1, \'w\': 2}" и строку "(x) => x ** 2"', function () {
        assert.equal(mapByReduce({'q': 1, 'w': 2}, (x) => x ** 2), 'error')
    });

    it('Передаем в функцию массив "[1,3]" и функцию "(x) => x ** 2"', function () {
        assert.deepEqual(mapByReduce([1, 3], (x) => x ** 2), [1, 9]);
    });

    it('Передаем в функцию массив "[\'Hello\',\'Word\']" и функцию "(x) => x += \'!\'"', function () {
        assert.deepEqual(mapByReduce(['Hello','Word'], (x) => x + '!'), ['Hello!','Word!']);
    });

    it('Передаем пустой массив "[]" и функцию "(x) => x += \'!\'"', function () {
        assert.deepEqual(mapByReduce([], (x) => x + '!'), []);
    });
});