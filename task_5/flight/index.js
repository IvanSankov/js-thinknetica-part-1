'use strict';

// Инициализируем начальные переменные
const flightForm = document.getElementById('flight-form');

// Добавляем событие на форму
flightForm.addEventListener('submit', submit);

/**
 * Функция-обработчик подтверждения формы покупки билета
 *
 * @param {Event} event
 */
function submit(event) {
    event.preventDefault();

    let elements = event.target.elements;
    let ticket;

    try {
        ticket = buyTicket(elements.flightName.value, Date.now(), elements.fullName.value, +elements.type.value);
    } catch (e) {
        console.log(e);
        alert(`Error ${e.message}`);
        return;
    }

    alert(`Success! Your ticket number is ${ticket.id}`);
    event.target.reset();
}