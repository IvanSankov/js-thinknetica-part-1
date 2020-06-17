'use strict';

/**
 * Класс для парусных кораблей
 *
 * @param {string} name
 * @param {CPosition} position
 * @param {number} numberMasts
 * @param {number} sailArea
 * @constructor
 */
function SailingShip(name, position, numberMasts, sailArea) {
    if (!name) {
        throw new Error('Имя корабля не может быть пустым.');
    }

    if (!position) {
        throw new Error('Необходима стартовая позиция для корабля.');
    }

    if (!numberMasts) {
        throw new Error('Необходима указать число матчт корабля');
    }

    if (!sailArea) {
        throw new Error('Необходима указать площадь парусов');
    }

    this.name = name;
    this._position = {...position};
    this.numberMasts = numberMasts;
    this.sailArea = sailArea;

    this.getParams = function () {
        return [this.name, this._position, this.numberMasts, this.sailArea];
    }
}

SailingShip.prototype = shipProto;