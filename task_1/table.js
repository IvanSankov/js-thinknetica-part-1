// Выведите в консоль таблицу умножения

for (let i = 1; i < 11; i++) {
    let row = '';
    for (let j = 1; j < 11; j++) {
        let result = i * j;
        if (result < 10) {
            row += `   ${result}`;
        } else if (result < 100) {
            row += `  ${result}`;
        } else {
            row += ` ${result}`;
        }
    }

    if (i === 1) {
        console.log(`x${row}`);
    }

    if (i === 10) {
        row = ' ' + row.trim();
    }
    console.log(`${i}${row}`);
}