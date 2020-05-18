// Для системы контроля авиабилетов, рассмотренной на занятии. Добавить функцию прохождения электронной регистрации


/**
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 *
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */
function eRegistration(ticket, fullName, nowTime) {
    let flightName;
    try {
        flightName = ticket.split('-')[0];
    } catch (e) {
        throw new Error('Введен неверный номер билета.');
    }

    let flight = flights[flightName];
    if (!flight) {
        throw new Error('Рейс не найден.');
    }

    let flightTicket = flight.tickets.reduce((acc, currVal, currIndex) => {
        if (currVal.id === ticket && currVal.fullName === fullName) {
            acc.index = currIndex;
            acc.ticket = currVal;
        }
        return acc;
    }, {index: null, ticket: null});

    if (!flightTicket.index) {
        throw new Error('Билета с таким номером и именем пассажира нет в списке купленных.');
    } else if (!flightTicket.ticket.registrationTime) {
        throw new Error('Билет уже был зарегестрирован.');
    }

    if (flight.registrationStarts < nowTime && nowTime < flight.registartionEnds) {
        // В контракте функции не указано, что надо проставлять время регистрации, но в объекте тикет есть поля
        // registrationTime, поэтому я добавил его заполнение, если этого не нужно делать, то эти два return можно
        // просто заменить на return flight.registrationStarts < nowTime && nowTime < flight.registartionEnds
        // Еще я не стал обрабатывать случай, когда уже зарегестрированного человека пытаются еще раз зарегестировать,
        // т.к. этого тоже не было в контракте.
        flight.tickets[flightTicket.index]['registrationTime'] = nowTime;
        return true;
    }

    return false;
}