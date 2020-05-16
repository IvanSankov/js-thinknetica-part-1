// Нахождеие площади правильного треугольника

let side = parseFloat(prompt('Введите длину стороны', 0));
let area = 0;

if (side < 0) {
    alert('Неккоректное значение!');
} else {
    area = (Math.sqrt(3) * (side ** 2)) / 4;
    alert(`Площадь равна ${area}`);
}