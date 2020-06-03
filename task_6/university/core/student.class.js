'use strict';

/**
 * Класс "Студент"
 * @param {string} fullName
 * @constructor
 */
function Student(fullName) {
    if (typeof fullName !== 'string') {
        throw new Error('Аргумент fullName должен быть стокой.');
    }

    const preparedFullName = fullName.replace(/\s+/g, ' ').trim();
    const words = preparedFullName.split(' ');

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
        return preparedFullName;
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
     * Метод сравнивающий двух студентов
     *
     * * Проверяет, что аргумент student является объектом класса Student
     *
     * @param {Student} student
     * @returns {boolean}
     */
    this.compare = function (student) {
        if (!(student instanceof Student)) {
            throw new Error('Аргумент должен являться объектом класса Student.');
        }

        return this.getFullName() === student.getFullName();
    }

    /**
     * Устанавливает состояние студента
     *
     * @param {boolean} isHealthy
     */
    this.setIsHealthy = function (isHealthy) {
        this._isHealthy = isHealthy;
    }

    /**
     * Возвращает состояние студента
     *
     * @returns {boolean}
     */
    this.getIsHealthy = function () {
        return this._isHealthy;
    }

    /**
     * ВОПРОС/ПРОБЛЕМА: Следующий метод вообще не универсальный, но я пока понятия даже не имею как лучше клонировать
     * такой объект... =(
     *
     * Функция для клонирования объекта
     *
     * @returns {Student}
     */
    this.clone = function () {
        const cloneObj = new Student(this.getFullName());
        cloneObj.setIsHealthy(this.getIsHealthy());

        return cloneObj;
    }
}