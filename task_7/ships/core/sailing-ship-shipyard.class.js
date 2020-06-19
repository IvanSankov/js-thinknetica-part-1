'use strict';

/**
 * Класс для верфей парусных корбалей
 *
 * @param {CPosition} position
 * @constructor
 */
function SailingShipShipyard(position) {
    if (!position) {
        throw new Error('Необходима стартовая позиция для корабля.');
    }

    this._position = {...position};
    this._factory = SailingShip;
}

SailingShipShipyard.prototype = new Shipyard();