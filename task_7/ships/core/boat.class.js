'use strict';

/**
 * Класс для катеров
 *
 * @param {string} name
 * @param {CPosition} position
 * @param {number} power
 * @param {string} material
 * @constructor
 */
function Boat(name, position, power, material) {
    if (!name) {
        throw new Error('Имя корабля не может быть пустым.');
    }

    if (!position) {
        throw new Error('Необходима стартовая позиция для корабля.');
    }

    if (!power) {
        throw new Error('Необходима указать можность корабля');
    }

    if (!power) {
        throw new Error('Необходима указать материал из которого сделан корабль');
    }

    this.name = name;
    this._position = {...position};
    this.power = power;
    this.material = material;

    this.getParams = function () {
        return [this.name, this._position, this.power, this.material];
    }
}

Boat.prototype = shipProto;