// ТЕСТ:  Написать функцию encodeText, которая принимает текст, выбирает все уникальные слова в нем, для каждого слова
// подсчитывает количество вхождений и присваивает уникальный код

describe('Тестируем функцию encodeText', function () {

    it('Передаем в качестве аргумента пустую строку ""', function () {
        assert.deepEqual(encodeText(""), {dictionary: [], encodedText: ''});
    });

    describe('Тестируем неверные типы аргументов', function () {
        it('Передаем в качестве аргумента число "1"', function () {
            assert.equal(encodeText(1), 'error');
        });

        it('Передаем в качестве аргумента объект "{}"', function () {
            assert.equal(encodeText({}), 'error');
        });

        it('Передаем в качестве аргумента массив "[1,2,3,4]"', function () {
            assert.equal(encodeText([1,2,3,4]), 'error');
        });
    });

    describe('Тестируем подробную информацию о строке "Lorem ipsum ipsum dolor."', function () {
        let testString;
        let encodedInfo;

        beforeEach(() =>{
            testString = "Lorem ipsum ipsum dolor.";
            encodedInfo = encodeText(testString)
        });

        it('Возвращенный результат объект', function () {
            assert.isObject(encodedInfo);
        });

        it('Есть свойство dictionary', function () {
            assert.property(encodedInfo, 'dictionary');
        });

        it('Есть свойстов encodedText', function () {
            assert.property(encodedInfo, 'encodedText');
        });

        it('dictionary содержит три элемента', function () {
            assert.lengthOf(encodedInfo.dictionary, 3);
        });

        it('encodedText это строка', function () {
            assert.isString(encodedInfo.encodedText);
        });

        it('encodedText не пустой', function () {
            assert.isAbove(encodedInfo.encodedText.length, 0);
        });

        it('Каждый объект dictionary содержит свойство "word"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.property(elem, 'word');
            });
        });

        it('Каждый объект dictionary содержит свойство "word" значение которого строка', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isString(elem.word);
            });
        });

        it('Каждый объект dictionary содержит непустое свойство "word"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isAbove(elem.word.length, 0);
            });
        });

        it('Каждый объект dictionary содержит свойство "code"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.property(elem, 'code');
            });
        });

        it('Каждый объект dictionary содержит свойство "code" значение которого строка', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isString(elem.code);
            });
        });

        it('Каждый объект dictionary содержит непустое свойство "code"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isAbove(elem.code.length, 0);
            });
        });

        it('Каждый объект dictionary содержит свойство "counter"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.property(elem, 'counter');
            });
        });

        it('Каждый объект dictionary содержит свойство "counter" значение которого число', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isNumber(elem.counter);
            });
        });

        it('Каждый объект dictionary содержит ненулевое свойство "counter"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isAbove(elem.counter, 0);
            });
        });

        it ('Сравниваем сгруппированные коды из dictionary со значением в encodedText', function () {

            let wordMapCode = encodedInfo.dictionary.reduce((acc, curr) => {
                acc[curr.word] = curr.code;
                return acc;
            }, {});

            let encodeText = testString
                .split(' ')
                .reduce((acc, curr) => {
                    let code = wordMapCode[curr.trim()];
                    if (code) {
                        acc.push(code);
                    }
                    return acc;
                }, [])
                .join(',');

            assert.strictEqual(encodedInfo.encodedText, encodeText);
        });
    });

    describe('Передаем текст состоящий из одного слова "Hello"', function () {
        let testString;
        let encodedInfo;

        beforeEach(() =>{
            testString = "Hello";
            encodedInfo = encodeText(testString)
        });

        it('Возвращенный результат объект', function () {
            assert.isObject(encodedInfo);
        });

        it('Есть свойство dictionary', function () {
            assert.property(encodedInfo, 'dictionary');
        });

        it('Есть свойстов encodedText', function () {
            assert.property(encodedInfo, 'encodedText');
        });

        it('dictionary содержит один элемент', function () {
            assert.lengthOf(encodedInfo.dictionary, 1);
        });

        it('encodedText это строка', function () {
            assert.isString(encodedInfo.encodedText);
        });

        it('encodedText не пустой', function () {
            assert.isAbove(encodedInfo.encodedText.length, 0);
        });

        it('Каждый объект dictionary содержит свойство "word"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.property(elem, 'word');
            });
        });

        it('Каждый объект dictionary содержит свойство "word" значение которого строка', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isString(elem.word);
            });
        });

        it('Каждый объект dictionary содержит непустое свойство "word"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isAbove(elem.word.length, 0);
            });
        });

        it('Каждый объект dictionary содержит свойство "code"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.property(elem, 'code');
            });
        });

        it('Каждый объект dictionary содержит свойство "code" значение которого строка', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isString(elem.code);
            });
        });

        it('Каждый объект dictionary содержит непустое свойство "code"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isAbove(elem.code.length, 0);
            });
        });

        it('Каждый объект dictionary содержит свойство "counter"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.property(elem, 'counter');
            });
        });

        it('Каждый объект dictionary содержит свойство "counter" значение которого число', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isNumber(elem.counter);
            });
        });

        it('Каждый объект dictionary содержит ненулевое свойство "counter"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isAbove(elem.counter, 0);
            });
        });

        it ('Сравниваем сгруппированные коды из dictionary со значением в encodedText', function () {
            assert.strictEqual(encodedInfo.encodedText, encodedInfo.dictionary[0]['code']);
        });
    });

    describe('Передаем текст состоящий из одного повторяющегося слова "Hello Hello Hello Hello"', function () {
        let testString;
        let encodedInfo;

        beforeEach(() =>{
            testString = "Hello Hello Hello Hello";
            encodedInfo = encodeText(testString)
        });

        it('Возвращенный результат объект', function () {
            assert.isObject(encodedInfo);
        });

        it('Есть свойство dictionary', function () {
            assert.property(encodedInfo, 'dictionary');
        });

        it('Есть свойстов encodedText', function () {
            assert.property(encodedInfo, 'encodedText');
        });

        it('dictionary содержит один элемент', function () {
            assert.lengthOf(encodedInfo.dictionary, 1);
        });

        it('encodedText это строка', function () {
            assert.isString(encodedInfo.encodedText);
        });

        it('encodedText не пустой', function () {
            assert.isAbove(encodedInfo.encodedText.length, 0);
        });

        it('Каждый объект dictionary содержит свойство "word"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.property(elem, 'word');
            });
        });

        it('Каждый объект dictionary содержит свойство "word" значение которого строка', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isString(elem.word);
            });
        });

        it('Каждый объект dictionary содержит непустое свойство "word"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isAbove(elem.word.length, 0);
            });
        });

        it('Слово в объекте dictionary это "Hello"', function () {
            assert.equal(encodedInfo.dictionary[0]['word'], 'Hello');
        });

        it('Каждый объект dictionary содержит свойство "code"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.property(elem, 'code');
            });
        });

        it('Каждый объект dictionary содержит свойство "code" значение которого строка', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isString(elem.code);
            });
        });

        it('Каждый объект dictionary содержит непустое свойство "code"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isAbove(elem.code.length, 0);
            });
        });

        it('Каждый объект dictionary содержит свойство "counter"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.property(elem, 'counter');
            });
        });

        it('Каждый объект dictionary содержит свойство "counter" значение которого число', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isNumber(elem.counter);
            });
        });

        it('Каждый объект dictionary содержит ненулевое свойство "counter"', function () {
            encodedInfo.dictionary.forEach((elem) => {
                assert.isAbove(elem.counter, 0);
            });
        });

        it('Слово в объекте dictionary это "Hello" и оно входит в строку 4 раза', function () {
            assert.strictEqual(encodedInfo.dictionary[0]['counter'], 4);
        });

        it ('Сравниваем сгруппированные коды из dictionary со значением в encodedText', function () {
            assert.strictEqual(
                encodedInfo.encodedText,
                Array(4).fill(encodedInfo.dictionary[0]['code']).join()
            );
        });
    });
});