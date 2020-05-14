// Нормализация введенного времени в 24-часовой формат

// let input = '12: 07 am';
// let input = '03.2 pm';
// let input = '1-17 am';
let input = '34:67';
let hours;
let minutes;
let hasPm = false;
let hasAm = false;


if (input.toLowerCase().indexOf('pm') !== - 1) {
    hasPm = true;
}

if (input.toLowerCase().indexOf('am') !== - 1) {
    hasAm = true;
}

let part = input.replace(/\D/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ');

if (part.length > 1) {
    hours = parseInt(part[0]);
    if (isNaN(hours)) {
        alert('Нельзя нормализоваться')
    } else {
        if (hasPm && hours !== 12) {
            hours += 12;
        }

        if (hasAm && hours === 12) {
            hours = 0;
        }

        if (hours > 23) {
            alert('Нельзя нормализоваться')
        } else {
            minutes = parseInt(part[1]);
            if (isNaN(hours) || minutes > 59) {
                alert('Нельзя нормализоваться')
            } else {
                if (hours < 10) {
                    hours = '0' + hours;
                }

                if (minutes < 10) {
                    minutes = '0' + minutes;
                }

                alert(`Время ${hours}:${minutes}`);
            }
        }
    }
} else {
    alert('Нельзя нормализовать');
}
