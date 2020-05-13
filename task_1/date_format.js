// Валидировать и переформатировать введенную пользователем дату из Американского в Российский стандарт

let input = String(prompt('Введите дату в формате ММ/ЧЧ/ГГГГ', ''));

if (input.length !== 10 || input.indexOf('/') !== 2 || input.lastIndexOf('/') !== 5) {
    alert('Нерпавильный формат');
} else {
    let inputPart = input.split('/');
    let output = `${inputPart[1]}.${inputPart[0]}.${inputPart[2]}`;
    alert(output);
}