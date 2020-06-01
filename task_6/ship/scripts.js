'use strict';

const ship = new Ship('ship', 'cater', {x: 0, y: 0});
const harbor = new Harbor({x: 1, y: 1})

console.log(ship);
console.log(harbor);

ship.move('s');
ship.move('e');

harbor.moor(ship);
