// ТЕСТЫ: Написать чистую функцию, которая принимает текст, и возвращает массив объектов со структурой

describe('Тестируем функцию wordStat', function () {
    it('Передаем число "1"', function () {
        assert.equal(wordStat(1), 'error');
    });

    it('Передаем массив "[]"', function () {
        assert.equal(wordStat([]), 'error');
    });

    it('Передаем пустую строку ""', function () {
        assert.deepEqual(wordStat(''), []);
    });

    it('Передаем много пробелов "                "', function () {
        assert.deepEqual(wordStat('                '), []);
    });

    it('Передаем однин символ "a"', function () {
        assert.deepEqual(wordStat("a"), [{word: 'a', sum: 'a'.charCodeAt(0)}])
    });

    it('Передаем однин символ "A"', function () {
        assert.deepEqual(wordStat("A"), [{word: 'A', sum: 'A'.charCodeAt(0)}])
    });

    it('Передаем строку "Lorem ipsum dolor sit amet."', function () {
        assert.deepEqual(wordStat("Lorem ipsum dolor sit amet."), [
            { word: 'Lorem', sum: 511 },
            { word: 'ipsum', sum: 558 },
            { word: 'dolor', sum: 544 },
            { word: 'sit', sum: 336 },
            { word: 'amet.', sum: 469 }
        ]);
    });
});

describe('Тестируем функцию sumCharCodeOfWord', function () {
    it('Передаем число "1"', function () {
        assert.equal(sumCharCodeOfWord(1), 'error');
    });

    it('Передаем массив "[]"', function () {
        assert.equal(sumCharCodeOfWord([]), 'error');
    });

    it('Передаем пустую строку ""', function () {
        assert.deepEqual(sumCharCodeOfWord(''), {word: '', sum: 0});
    });

    it('Передаем много пробелов "                "', function () {
        assert.deepEqual(sumCharCodeOfWord('                '), {word: '', sum: 0});
    });

    it('Передаем два слова "qwe asd"', function () {
        assert.deepEqual(sumCharCodeOfWord('qwe asd'), 'error');
    });

    it('Передаем слово "Lorem"', function () {
        assert.deepEqual(sumCharCodeOfWord('Lorem'), {word: 'Lorem', sum: 511});
    });

    it('Передаем слово "sit"', function () {
        assert.deepEqual(sumCharCodeOfWord('sit'), {word: 'sit', sum: 336});
    });
});