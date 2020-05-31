'use strict';

/**
 * Класс "Группа"
 * @param {number} number
 * @constructor
 */
function Group(number) {
    /**
     * Номер группы
     * @type {number}
     */
    this.number = number;

    /**
     * Список всех студентов в группе
     * @type {Student[]}
     * @private
     */
    this._all_students = _getAllStudents(number);

    /**
     * Список студентов присутствующих на данных момент
     * @type {Student[]}
     * @private
     */
    this._students = [];


    /**
     * ПРОБЛЕМА/ВОПРОС: вот тут у меня была заминка, с одной стороны это же студент приходит в группу, значит у
     * студента должен быть метод аля "Прийти в группу (group)", но в этом случае получается, что внутри этой функции
     * мы должны будем модифицировать приватное свойство this._students, а это не очень хорошо. Поэтому я поместил
     * этот метод сюда, но мне кажется стало не особо логично. Как быть? Можно ли как-то сделат лучше? И еще, наверное
     * стоит сделать проверку, принадлжит ли студент данной группе или может "новенький прийти", которого в списке
     * еще нет?
     *
     *
     * Метод добавляет студента к уже присутствующим студентам на паре
     *
     * @param {Student} student
     */
    this.addStudent = function (student) {
        if (!(student instanceof Student)) {
            throw new Error('Аргумент переданный в функцию должен быть объектом класса Student');
        }

        this._students.push(student);
    }

    /**
     * ПРОБЛЕМА/ВОПРОС: что лучше возвращать? копии объектов Student или сами объекты?
     *
     *
     * Метод ищет отсутствующих студентов.
     *
     * тут и далее считаем, что fullName студентов уникальны, так как именно по fullName прозводится поиск
     *
     * @returns {Student[]}
     */
    this.findAbsentStudents = function () {
        const currentStudentIds = this._students.reduce((acc, curr) => {
            acc.push(curr.getFullName());
            return acc;
        }, []);

        return this._all_students.filter((student) => !currentStudentIds.includes(student.getFullName()));
    }

    /**
     * ПРОБЛЕМА/ВОПРОС: тут я считал, что про отсутствующих студентов я ничего не знаю, больны они или нет, а знаю
     * информацию только о тех, кто пришел.
     *
     *
     * Метод возращает список больных студентов
     *
     * @returns {Student[]}
     */
    this.findSickStudents = function () {
        return this._students.filter(student => !student.isHealthy());
    }

    /**
     * Этот метод для поиска списка студентов по номеру группы, то есть, если бы у нас была БД, можно было бы из нее
     * достать список всех студентов. Фактически инициализируем список.
     * @private
     */
    function _getAllStudents (number) {
        switch (number) {
            case 1:
                return [
                    new Student('Ivanov Ivan Ivanovich'),
                    new Student('Petrov Petr Petrovich'),
                    new Student('Sidorov Sidor Sidorovich'),
                ];
            case 2:
                return [
                    new Student('Ivanov22 Ivan Ivanovich'),
                    new Student('Petrov22 Petr Petrovich'),
                    new Student('Sidorov22 Sidor Sidorovich'),
                ];
        }
    }
}