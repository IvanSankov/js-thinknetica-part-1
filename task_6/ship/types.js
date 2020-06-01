'use strict';

/**
 * Объект позиции, назван CPosition чтобы не было пересечения с классом Position из DOM, а то IDE тогда подсказывает
 * по обоим классам :-(
 *
 * @typedef {Object} CPosition
 * @property {number} x
 * @property {number} y
 */

/**
 * Объект "Корабль"
 *
 * @typedef {Object} Ship
 * @property {string} name
 * @property {string} model
 * @property {CPosition} position
 * @property {number} distance
 * @property {boolean} _isAnchorDropped - А надо документировать приватные свойства? я вообще правильно делаю, что пишу
 *                                      "документацию" к существующему классу? А надо описывать набор методов? А может
 *                                      быть лучше всего это описание к классу унести? Как лучше сделать?
 */

/**
 * Объект "Пристань"
 *
 * @typedef {Object} Harbor
 * @property {CPosition} position
 * @property {Object} ships - так как у класс Ship свойство name уникальное, то проще сделать ассоциативный массив,
 *                      в котором ключами являются имена кораблей, а значением сами объекты кораблей
 */