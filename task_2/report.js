// Для системы контроля авиабилетов, рассмотренной на занятии. Добавить функцию для получения отчета по рейсу

/**
 * Отчет о рейсе на данный момент
 *
 * @typedef {Object} Report
 * @property {string} flight Номер рейса
 * @property {boolean} registration Доступна регистрация на самолет
 * @property {boolean} complete Регистрация завершена или самолет улетел
 * @property {number} countOfSeats Общее количество мест
 * @property {number} reservedSeats Количество купленных (забронированных) мест
 * @property {number} registeredSeats Количество пассажиров, прошедших регистрацию
 */

/**
 * Функция генерации отчета по рейсу
 *
 *  * проверка рейса
 *  * подсчет
 *
 * @param {string} flight номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(flight, nowTime) {
    let flightObj = flights[flight];
    if (!flightObj) {
        throw new Error('Рейс не найден');
    }

    if (!Number.isInteger(nowTime)) {
        throw new Error('Некорректно задано текущее время');
    }

    /**
     *
     * @type {Report}
     */
    return {
        flight,
        registration: flightObj.registrationStarts < nowTime && nowTime < flightObj.registartionEnds,
        complete: flightObj.registartionEnds < nowTime,
        countOfSeats: flightObj.seats + flightObj.businessSeats,
        registeredSeats: flightObj.tickets.length,
        reservedSeats: flightObj.tickets.reduce((acc, curr) => curr.registrationTime ? acc + 1 : acc, 0),
    };
}