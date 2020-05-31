'use strict';

/**
 * Класс "Студент"
 * @param {string} fullName
 * @constructor
 */
function Student(fullName) {
    const words = fullName.trim().split(' ');
    if (words.length !== 3) {
        throw new Error('Аргумент fullName должен состоять из трех слов');
    }

    this.firstName = words[1];
    this.lastName = words[0];
    this.patronymic = words[2];

    this._isHealthy = true;

    /**
     * Метод возвращает полное имя студента
     *
     * @returns {string}
     */
    this.getFullName = function () {
        return fullName;
    }

    /**
     * Метод возвращает фамилию студента с инициалами
     *
     * @returns {string}
     */
    this.getShortFullName = function () {
        return `${this.lastName} ${this.firstName.charAt(0)}. ${this.patronymic.charAt(0)}.`;
    }

    /**
     * Помечает, что студент заболел
     */
    this.getSick = function () {
        this._isHealthy = false;
    }

    /**
     * Помечает, что студент здоров
     */
    this.recover = function () {
        this._isHealthy = true;
    }

    /**
     * Возвращает состояние студента
     *
     * @returns {boolean}
     */
    this.isHealthy = function () {
        return this._isHealthy;
    }
}