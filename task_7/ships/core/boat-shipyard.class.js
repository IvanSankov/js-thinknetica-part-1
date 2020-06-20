'use strict';

/**
 * Класс для верфей катеров
 *
 * @param {CPosition} position
 * @constructor
 */
function BoatShipyard(position) {
    if (!position) {
        throw new Error('Необходима стартовая позиция для корабля.');
    }

    this._position = {...position};
    this._factory = Boat;
}

BoatShipyard.prototype = new Shipyard();