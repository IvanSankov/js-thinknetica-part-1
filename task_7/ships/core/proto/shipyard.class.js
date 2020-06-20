'use strict';

/**
 * Прототип всех верфей
 *
 * @constructor
 */
function Shipyard() {
    /**
     * Создает корабль
     *
     * @param {string} name
     * @param customInfo
     *
     * @returns {Ship}
     */
    this.buildShip = function (name, ...customInfo) {
        const template = this._getFactory();
        const instance = new template(name, this.getPosition(), customInfo[0], customInfo[1]);

        instance.setColor('black');
        instance.setState(100);

        return instance;
    }

    /**
     * Чинит корабли, находящиеся на верфи
     *
     * * Проверяет, что корабль на верфи
     * * Проверяет, что корабль нужного типа
     *
     * @param {Ship} ship
     * @param {number} state
     *
     * @returns {undefined}
     */
    this.repairShip = function (ship, state) {
        this._validate(ship);

        ship.setState(state);
    }

    /**
     * Перекрашивает корабль
     *
     * * Проверяет, что корабль на верфи
     *
     * @param {Ship} ship
     * @param {string} color
     */
    this.paintShip = function (ship, color) {
        if (!this._isShipInShipyard(ship)) {
            throw new Error(`Корабль ${ship.name} не находится на этой верфи`);
        }

        ship.setColor(color)
    }

    /**
     * Заменяет текущий корабль на новый
     *
     * @param {Ship} ship
     *
     * @returns {Ship}
     */
    this.replaceShip = function (ship) {
        this._validate(ship);

        return this.buildShip(...ship.getParams());
    }

    /**
     * Возвращает позицию верфи
     *
     * @returns {CPosition}
     */
    this.getPosition = function () {
        return {...this._position};
    }

    /**
     * Отдает класс, из которого должен быть создан корабль
     *
     * * Проверяет, что такой класс есть
     * * Проверяет, класс-шаблон является дочерним элементом класса Ship
     *
     * @returns {Ship}
     * @private
     */
    this._getFactory = function () {
        if (!this._factory) {
            throw new Error(`Вы должны указать класс, из которого будет создан корабль.`);
        }

        if (!(this._factory.prototype instanceof Ship)) {
            throw new Error(`Фабрика должна быть дочерним элементом класса Ship`);
        }

        return this._factory;
    }

    /**
     * Проверяет, находится ли данный корабль на верфи
     *
     * @param {Ship} ship
     *
     * @returns {boolean}
     * @private
     */
    this._isShipInShipyard = function (ship) {
        const shipPosition = ship.getPosition();
        const shipyardPosition = this.getPosition();

        return shipPosition.x === shipyardPosition.x && shipPosition.y === shipyardPosition.y;
    }

    this._validate = function (ship) {
        if (!(ship instanceof this._getFactory())) {
            throw new Error(`На это верфи вы можете производить корабли данного типа.`);
        }

        if (!this._isShipInShipyard(ship)) {
            throw new Error(`Корабль ${ship.name} не находится на этой верфи`);
        }
    }
}