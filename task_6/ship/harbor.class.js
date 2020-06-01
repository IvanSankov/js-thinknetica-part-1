'use strict';

/**
 * Конструктор для класс "Пристань"
 *
 * @param {CPosition} position
 * @param {Object} ships - так как у класс Ship свойство name уникальное, то проще сделать ассоциативный массив,
 *                      в котором ключами являются имена кораблей, а значением сами объекты кораблей
 * @constructor
 */
function Harbor(position, ships = {}) {
    this.position = {...position};
    this.ships = ships;

    /**
     * Метод для пришвартовки корабля ship к пристани this.
     *
     * * Ставит корабль на якорь
     * * добавляет в this.ships корабль ship
     *
     * @param {Ship} ship
     */
    this.moor = function (ship) {
        this._validate(ship);
        ship.dropAnchor();
        this.ships[ship.name] = ship;
    }

    /**
     * Метод для отшвартовки корабля ship от пристани this
     *
     * * Снимает корабль ship с якоря
     * * Удаляет из this.ships корабль ship
     * * Проверяет, что корабль в гавани
     *
     * @param ship
     */
    this.unmoor = function (ship) {
        this._validate(ship);

        if (!(ship.name in this.ships)) {
            throw new Error(`Корабль ${ship.name} не был пришвартован к бухте {x:${this.position.x}, y:${this.position.y}`)
        }

        ship.raiseAnchor();
        delete this.ships[ship.name];
    }

    /**
     * ПРОБЛЕМА/ВОПРОС: вынес код в отдельную функцию, назвал ее с нижнего подчеркивания, как будто бы это приватная
     * функция. Так делают? Так же не уверен по формату, данная функция ничего не возвращает а только бросает исключение
     * это нормально?
     *
     *
     * Метод для валидации корабля
     *
     * * Проверяет, что ship является объектом класса Ship
     * * Проверяет находится ли корабль на пристани, т.е. в тех же координатах
     *
     * @param {Ship} ship
     * @private
     */
    this._validate = function(ship) {
        if (!(ship instanceof Ship)) {
            throw new Error('Метод Harbor.moor() первым аргументом требует объект класса Ship');
        }

        if (ship.position.x !== this.position.x || ship.position.y !== this.position.y) {
            throw new Error(`Корабль  ${ship.name} не находится в бухте {x:${this.position.x}, y:${this.position.y}`);
        }
    }
}