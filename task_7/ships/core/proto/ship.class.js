'use strict';

/**
 * Прототип всех кораблей
 *
 * @constructor
 */

function Ship() {
    const directions = {
        n: {x: 0, y: -1},
        w: {x: -1, y: 0},
        s: {x: 0, y: 1},
        e: {x: 1, y: 0},
    };

    /**
     * Метод передвигает корабль в заданном direction ('n' - север, 'w' - запад, 's' - юг, 'e' - восток) на дистанцию
     * равную distance. ОТМЕЧУ: системой начала координат я считаю левый верхний угол экрана, таким образом, если
     * корабль стоит в точке (0,0) то при движении его на север на 1 единицу, новые координаты будут (0, -1), на юг
     * (0, 1), на запад (-1, 0), на восток (1, 0)
     *
     * * Проверяет, что direction из списка допустимых значений
     * * Проверяет, что distance неотрициательно число
     *
     * @param {string} direction
     * @param {number} distance
     *
     * @returns {CPosition}
     */
    this.move = function (direction, distance = 1) {
        const directionVector = directions[direction];
        if (!directionVector) {
            throw new Error(`"${direction}" является не допустимым направлением движения.`)
        }

        if (isNaN(distance) || distance < 0) {
            throw new Error(`Значение "${distance}" является не допустимым.`)
        }

        return this.moveTo(
            this._position.x + directionVector.x * distance,
            this._position.y + directionVector.y * distance
        );
    }

    /**
     * Метод передвигает корабль в заданные координыта (x, y)
     *
     * * Проверяет, стоит ли корабль на якоре
     * * Пересчитывает свойство this._distance
     * * Пересчитывает свойство this._position
     *
     * @param {number} x
     * @param {number} y
     *
     * @returns {CPosition}
     */
    this.moveTo = function (x, y) {
        if (this.isAnchorDropped()) {
            throw new Error(`Корабль ${this.name} стоит на якоре.`)
        }

        const newPosition = {x, y};

        this._distance += ((newPosition.x - this._position.x) ** 2 + (newPosition.y - this._position.y) ** 2) ** 0.5;
        this._position = {...newPosition};

        return newPosition;
    }

    /**
     * Помечает, что корабль встал на якорь
     *
     * @returns {undefined}
     */
    this.dropAnchor = function () {
        this._isAnchorDropped = true;
    }

    /**
     * Помечает, что корабль снялся с якоря
     *
     * @returns {undefined}
     */
    this.raiseAnchor = function () {
        this._isAnchorDropped = false;
    }

    /**
     * Проверяет стоит ли корабль на якоре
     *
     * @return {boolean}
     */
    this.isAnchorDropped = function () {
        return this._isAnchorDropped;
    }

    /**
     * Возвращает цвет корабля
     *
     * @returns {string}
     */
    this.getColor = function () {
        return this._color;
    }

    /**
     * Устанавливает цвет корабля
     *
     * @param {string} color
     * @returns {undefined}
     */
    this.setColor = function (color) {
        this._color = color;
    }

    /**
     * Устанавливает насколько изношен корабль
     *
     * * Проверяет, что число state от 0 до 100
     *
     * @param {number} state
     */
    this.setState = function (state) {
        if (isNaN(state) || state < 0 || state > 100) {
            throw new Error(`Корабль ${this.name} не может принять состояние равное ${state}.`);
        }

        this._state = state;
    }

    /**
     * Отдает состояние корабля
     *
     * @returns {number}
     */
    this.getState = function () {
        return this._state;
    }

    /**
     * Возвращает позицию корабля
     *
     * @returns {CPosition}
     */
    this.getPosition = function () {
        return {...this._position};
    }

    /**
     * Метод возвращает набор параметров, необходимых для создание нового объекта с такими же свойствами
     *
     * @returns {array}
     */
    this.getParams = function () {
        throw new Error(`Необходимо имплиментировать метод.`);
    }
}