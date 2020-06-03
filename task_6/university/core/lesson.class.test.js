describe('Class Lesson', function () {

    describe('Constructor', function () {
        it('empty arguments', function () {
            expect(() => new Lesson())
                .to.throw(Error);
        });
        it('first argument is number', function () {
            expect(() => new Lesson(1))
                .to.throw('Первый аргумент конструктора Lesson должен быть объект типа Group.');
        });
        it('first argument is string', function () {
            expect(() => new Lesson('qwe'))
                .to.throw('Первый аргумент конструктора Lesson должен быть объект типа Group.');
        });
        it('first argument is array', function () {
            expect(() => new Lesson([1, 2]))
                .to.throw('Первый аргумент конструктора Lesson должен быть объект типа Group.');
        });
        it('first argument is object', function () {
            expect(() => new Lesson({x: 1}))
                .to.throw('Первый аргумент конструктора Lesson должен быть объект типа Group.');
        });
        it('first argument is Group and second is empty', function () {
            expect(() => new Lesson(new Group(712)))
                .to.throw('Второй аргумент конструктора Lesson должен быть целым числом.');
        });
        it('first argument is Group and second is string', function () {
            expect(() => new Lesson(new Group(712), '1111'))
                .to.throw('Второй аргумент конструктора Lesson должен быть целым числом.');
        });
        it('first argument is Group and second is array', function () {
            expect(() => new Lesson(new Group(712), [1, 2]))
                .to.throw('Второй аргумент конструктора Lesson должен быть целым числом.');
        });
        it('first argument is Group and second is number', function () {
            expect(() => new Lesson(new Group(712), 2132412512))
                .to.not.throw('Второй аргумент конструктора Lesson должен быть целым числом.');
        });
    });

    describe('Methods', function () {
        let lesson;
        let group;
        let student1;
        let student2;
        let student3;
        let student4;
        let student5;

        beforeEach(() => {
            group = new Group(712);
            student1 = new Student('Ivanov Ivan Ivanovich');
            student2 = new Student('Petrov Petr Petrovich');
            student3 = new Student('Simenov Semen Semenovich');
            student4 = new Student('Karton Kart Kartovich');
            student5 = new Student('Aleksandrov Aleksand Aleksandrovich');

            student2.setIsHealthy(false);
            student4.setIsHealthy(false);

            group.addStudent(student1);
            group.addStudent(student2);
            group.addStudent(student3);
            group.addStudent(student4);
            group.addStudent(student5);

            lesson = new Lesson(group, Date.now());
        });

        it ('countStudentIsPresentToday', function () {
            student1.setIsHealthy(false);
            student3.setIsHealthy(false);
            student5.setIsHealthy(false);

            expect(lesson.countStudentIsPresentToday()).to.equal(3);
        });
        it ('getStudentIsPresentToday', function () {
            expect(lesson.getStudentIsPresentToday()).to.be.an('array');
        });
        it ('getStudentIsAbsentToday', function () {
            expect(lesson.getStudentIsAbsentToday()).to.be.an('array');
        });
        it ('countGetStudentIsAbsentToday', function () {
            expect(lesson.getStudentIsAbsentToday()).to.have.lengthOf(2);
        });
    });
});