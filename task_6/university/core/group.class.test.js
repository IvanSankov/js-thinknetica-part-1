describe('Class Group', function () {

    describe('Constructor', function () {
        it('without arguments', function () {
            expect(() => new Group())
                .to.throw('Конструктор класса Group в качестве аргумента принимает только числа.');
        });
        it('argument is string', function () {
            expect(() => new Group('1'))
                .to.throw('Конструктор класса Group в качестве аргумента принимает только числа.');
        });
        it('argument is array', function () {
            expect(() => new Group([1, 2]))
                .to.throw('Конструктор класса Group в качестве аргумента принимает только числа.');
        });
        it('argument is obj', function () {
            expect(() => new Group({x: 1}))
                .to.throw('Конструктор класса Group в качестве аргумента принимает только числа.');
        });
        it('argument is number', function () {
            expect(() => new Group(712))
                .to.not.throw('Конструктор класса Group в качестве аргумента принимает только числа.');
        });
    });

    describe('Methods', function () {
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
        })

        describe('addStudent', function () {
            it('argument is string', function () {
                expect(() => group.addStudent('Ivanov Ivan Ivanovich'))
                    .to.throw('Аргумент должен являться объектом класса Student.')
            });
            it('argument is number', function () {
                expect(() => group.addStudent(1))
                    .to.throw('Аргумент должен являться объектом класса Student.')
            });
            it('argument is array', function () {
                expect(() => group.addStudent(['asd', 'asd']))
                    .to.throw('Аргумент должен являться объектом класса Student.')
            });
            it('argument is Student', function () {
                expect(() => group.addStudent(student1))
                    .to.not.throw('Аргумент должен являться объектом класса Student.')
            });
            it('add one Student', function () {
                group.addStudent(student1);

                expect(group._students).to.have.lengthOf(1);
                expect(student1.compare(group._students[0])).to.equal(true);
            });
            it('add five Students', function () {
                group.addStudent(student1);
                group.addStudent(student2);
                group.addStudent(student3);
                group.addStudent(student4);
                group.addStudent(student5);

                expect(group._students).to.have.lengthOf(5);
                expect(student1.compare(group._students[0])).to.equal(true);
                expect(student2.compare(group._students[1])).to.equal(true);
                expect(student3.compare(group._students[2])).to.equal(true);
                expect(student4.compare(group._students[3])).to.equal(true);
                expect(student5.compare(group._students[4])).to.equal(true);
            });
        });

        describe('removeStudent', function () {
            it('remove one element', function () {
                group.addStudent(student1);
                group.addStudent(student2);
                group.addStudent(student3);
                group.addStudent(student4);
                group.addStudent(student5);


                group.removeStudent(student2);
                expect(group._students).to.have.lengthOf(4);
            });

            it('remove 4 elements', function () {
                group.addStudent(student1);
                group.addStudent(student2);
                group.addStudent(student3);
                group.addStudent(student4);
                group.addStudent(student5);


                group.removeStudent(student2);
                group.removeStudent(student3);
                group.removeStudent(student4);
                group.removeStudent(student1);
                expect(group._students).to.have.lengthOf(1);
            });
        });

        describe('findAbsentStudent', function () {
            it('empty student list', function () {
                expect(group.findAbsentStudent()).to.have.lengthOf(0);
            });
            it('1 absent', function () {
                group.addStudent(student2);
                group.addStudent(student1);
                group.addStudent(student3);

                expect(group.findAbsentStudent()).to.have.lengthOf(1);
            });
            it('2 absent', function () {
                group.addStudent(student2);
                group.addStudent(student4);

                expect(group.findAbsentStudent()).to.have.lengthOf(2);
            });
        });

        describe('findIsPresentStudent', function () {
            it('empty student list', function () {
                expect(group.findIsPresentStudent()).to.have.lengthOf(0);
            });
            it('2 is present', function () {
                group.addStudent(student2);
                group.addStudent(student1);
                group.addStudent(student3);

                expect(group.findIsPresentStudent()).to.have.lengthOf(2);
            });
            it('0 is present', function () {
                group.addStudent(student2);
                group.addStudent(student4);

                expect(group.findIsPresentStudent()).to.have.lengthOf(0);
            });
            it('3 is present', function () {
                group.addStudent(student1);
                group.addStudent(student3);
                group.addStudent(student5);

                expect(group.findIsPresentStudent()).to.have.lengthOf(3);
            });
        });
    });

});