'use strict';

/**
 *
 * @param {Group} group
 * @param {number} date - принимаемое значение timestamp
 * @constructor
 */
function Lesson(group, date) {
    if (!(group instanceof Group)) {
        throw new Error('Первый аргумент конструктора Lesson должен быть объект типа Group.');
    }

    if (!Number.isInteger(date)) {
        throw new Error('Второй аргумент конструктора Lesson должен быть целым числом.')
    }

    this._date = date;
    this._group = group;
    this._student_is_present_today = cloneStudents(group.findIsPresentStudent());
    this._student_is_absent_today = cloneStudents(group.findAbsentStudent());

    /**
     * Метод возвращает список студентов присутствующих на занятии
     *
     * @returns {Student[]}
     */
    this.getStudentIsPresentToday = function () {
        return cloneStudents(this._student_is_present_today);
    }

    /**
     * Метод возвращает количество студентов присутствующих на занятии
     *
     * @returns {number}
     */
    this.countStudentIsPresentToday = function () {
        return this._student_is_present_today.length;
    }

    /**
     * Метод возвращает студентов отсутствовавших на занятии
     *
     * @returns {Student[]}
     */
    this.getStudentIsAbsentToday = function () {
        return cloneStudents(this._student_is_absent_today);
    }

    /**
     * Метод клонирует студентов в новый массив
     *
     * @param {Student[]} students
     * @returns {Student[]};
     */
    function cloneStudents(students) {
        return students.map(student => student.clone());
    }
}