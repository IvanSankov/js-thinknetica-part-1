'use strict';

/**
 * Конструктор для класса "Корабль"
 *
 * @param {string} name
 * @param {string} model
 * @param {CPosition} position
 *
 * @constructor
 */
function Ship(name, model, position) {
    // public property
    this.name = name;
    this.model = model;
    // Так как позиция это объект, то думаю, что нельзя его просто так присваивать, поэтому копирую его
    this.position = {...position};
    this.distance = 0;

    // private property
    this._isAnchorDropped = false;


    // Далее только функции

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
        const directions = {
            n: {x: 0, y: -1},
            w: {x: -1, y: 0},
            s: {x: 0, y: 1},
            e: {x: 1, y: 0},
        };

        const directionVector = directions[direction];
        if (!directionVector) {
            throw new Error(`"${direction}" является не допустимым направлением движения.`)
        }

        if (isNaN(distance) || distance < 0) {
            throw new Error(`Значение "${distance}" является не допустимым.`)
        }

        return this.moveTo(
            this.position.x + directionVector.x * distance,
            this.position.y + directionVector.y * distance
        );
    }

    /**
     * Метод передвигает корабль в заданные координыта (x, y)
     *
     * * Проверяет, стоит ли корабль на якоре
     * * Пересчитывает свойство this.distance
     * * Пересчитывает свойство this.position
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

        this.distance += ((newPosition.x - this.position.x) ** 2 + (newPosition.y - this.position.y) ** 2) ** 0.5;
        this.position = {...newPosition};

        return newPosition;
    }

    /**
     * Помечает, что корабль снялся с якоря
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
}