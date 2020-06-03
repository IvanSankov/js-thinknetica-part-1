'use strict';

/**
 * Класс "Группа"
 * @param {number} number
 * @constructor
 */
function Group(number) {
    if (!Number.isInteger(number)) {
        throw new Error('Конструктор класса Group в качестве аргумента принимает только числа.');
    }

    /**
     * Номер группы
     * @type {number}
     */
    this.number = number;

    /**
     * Студенты в группе
     * @type {Student[]}
     * @private
     */
    this._students = [];

    /**
     * Добавляет студента в группу
     *
     * * Проверяет, что аргумент student является объектом класса Student
     * * Проверяет, что студента нет в группе
     *
     * @param {Student} student
     * @returns {boolean}
     */
    this.addStudent = function (student) {
        if (!(student instanceof Student)) {
            throw new Error('Аргумент должен являться объектом класса Student.');
        }

        const isStudentAlreadyExist = this._students.some(currentStudent => student.compare(currentStudent));

        if (!isStudentAlreadyExist) {
            this._students.push(student);
        }

        return true;
    }

    /**
     * Удаляет студента из группы
     *
     * @param {Student} student
     * @returns {boolean}
     */
    this.removeStudent = function (student) {
        for (let index = 0; index < this._students.length; index++) {

            if (this._students[index].compare(student)) {
                this._students.splice(index, 1);
                return true;
            }

        }

        return false;
    }

    /**
     * Метод возвращающий список отсутствующих студентов
     *
     * @returns {Student[]}
     */
    this.findAbsentStudent = function () {
        return this._students.filter(student => !student.getIsHealthy());
    }

    /**
     * Метод возвращает присутствующих студентов
     *
     * @returns {Student[]}
     */
    this.findIsPresentStudent = function () {
        return this._students.filter(student => student.getIsHealthy());
    }
}