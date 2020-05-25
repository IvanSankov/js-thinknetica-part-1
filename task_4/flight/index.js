 // Реализовать функцию flightDetails(flightName) которая принимает объект рейса и будет выводить в контейнер
 // <div id=”flight-details”></div> отчет по рейсу и отображать список купленных билетов: номер билета, место, полное
 // имя пассажира, прошел ли регистрацию на рейс.

"use strict";

let flights = {
    BH118: {
        name: 'BH118',
        seats: 28,
        businessSeats: 4,
        registrationStarts: 1,
        registartionEnds: 3,
        tickets: [
            {
                id: 'BH118-B50',
                flight: 'BH118',
                fullName: 'Ivanov I. I.',
                type: 0,
                seat: 1,
                buyTime: 2,
                registrationTime: 2,
            },
            {
                id: 'BH118-B1',
                flight: 'BH118',
                fullName: 'Petrov I. I.',
                type: 0,
                seat: 10,
                buyTime: 2,
                registrationTime: null,
            },
            {
                id: 'BH118-B10',
                flight: 'BH118',
                fullName: 'Sidorov I. I.',
                type: 0,
                seat: 18,
                buyTime: 2,
                registrationTime: 2,
            }
        ],
    }
};

const template = document.getElementById('ticket-info');

function flightDetails(flightName) {
    let container = document.getElementById('flight-details');
    let header = document.createElement('h1');
    let headerText = document.createTextNode(`Flight ${flightName}`);
    let ul = document.createElement('ul');

    header.append(headerText);
    container.append(header);

    flights[flightName].tickets.forEach(elem => {
        let cloneTemplate = template.content.cloneNode(true);

        cloneTemplate.querySelector('.ticket-id').innerText = elem.id;
        cloneTemplate.querySelector('.ticket-seat').innerText = elem.seat;
        cloneTemplate.querySelector('.ticket-fullName').innerText = elem.fullName;
        cloneTemplate.querySelector('.has-registration').innerText = elem.registrationTime ? 'Yes': 'No';

        ul.append(cloneTemplate);
    });


    container.append(ul);
}

 flightDetails('BH118');