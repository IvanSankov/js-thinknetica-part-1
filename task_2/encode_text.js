// Написать функцию encodeText, которая принимает текст, выбирает все уникальные слова в нем, для каждого слова
// подсчитывает количество вхождений и присваивает уникальный код

/**
 *
 * @param {string} text
 * @return {Object}
 */
function encodeText(text) {
    let splitedText = text.split(' ').filter((elem) => elem.length > 0);
    let data = splitedText
        .reduce((acc, word) => {
            if (!(word in acc.wordMapCounter)) {
                let code = generateCode();
                while (acc.codes.includes(code)) {
                    code = generateCode();
                }
                acc.codes.push(code);

                acc.wordMapCode[word] = code;
                acc.wordMapCounter[word] = 0;
            }

            acc.wordMapCounter[word]++;

            return acc;
        }, {codes: [], wordMapCode: {}, wordMapCounter: {}});

    let dictionary = Object
        .keys(data.wordMapCounter)
        .map((word) => {
            return {
                word,
                counter: data.wordMapCounter[word],
                code:data.wordMapCode[word]
            }
        });

    let encodedText = splitedText.reduce((acc, currVal, currIndex, arr) => {
        acc += data.wordMapCode[currVal];
        if (currIndex !== arr.length - 1) {
            acc += ',';
        }

        return acc
    }, '');

    return {
        encodedText,
        dictionary
    };

    /**
     * Функция для генерации случайного кода
     *
     * @return {string}
     */
    function generateCode() {
        return Math.random().toString(36).substr(2);
    }

}