describe('Class Student', function () {

    describe('Constructor', function () {
        it('Empty fullName', function () {
            expect(() => new Student())
                .to.throw('Аргумент fullName должен быть стокой.');
        });
        it('fullName is object', function () {
            expect(() => new Student({x: 1}))
                .to.throw('Аргумент fullName должен быть стокой.');
        });
        it('fullName is array', function () {
            expect(() => new Student([1, 2, 3]))
                .to.throw('Аргумент fullName должен быть стокой.');
        });
        it('fullName is "Ivanov"', function () {
            expect(() => new Student('Ivanov'))
                .to.throw('Аргумент fullName должен состоять из трех слов');
        });
        it('fullName is "Ivanov Ivan"', function () {
            expect(() => new Student('Ivanov Ivan'))
                .to.throw('Аргумент fullName должен состоять из трех слов');
        });
        it('fullName is "Ivanov Ivan Ivanovich I"', function () {
            expect(() => new Student('Ivanov Ivan Ivanovich I'))
                .to.throw('Аргумент fullName должен состоять из трех слов');
        });
        it('fullName is "  Ivanov  Ivan           Petrovich "', function () {
            expect(() => new Student('  Ivanov  Ivan           Petrovich '))
                .to.not.throw(Error);
        });
    });

    describe('Methods for "  Ivanov  Ivan           Petrovich "', function () {
        let student;

        beforeEach(() =>{
            student = new Student('  Ivanov  Ivan           Petrovich ');
        });

        it('getFullName', function () {
            expect(student.getFullName()).to.equal('Ivanov Ivan Petrovich');
        });
        it('getShortFullName', function () {
            expect(student.getShortFullName()).to.equal('Ivanov I. P.');
        });

        describe('compare', function () {
            it('with Number', function () {
                expect(() => student.compare(1))
                    .to.throw('Аргумент должен являться объектом класса Student.');
            });
            it('with {x: 1}}', function () {
                expect(() => student.compare({x: 1}))
                    .to.throw('Аргумент должен являться объектом класса Student.');
            });
            it('with Student', function () {
                const anotherStudent = new Student('  Ivanov Ivan Petrovich');
                expect(() => student.compare(anotherStudent))
                    .to.not.throw(Error);
            });
            it('with "  Ivanov Ivan Petrovich"', function () {
                const anotherStudent = new Student('  Ivanov Ivan Petrovich');
                expect(student.compare(anotherStudent)).to.equal(true);
            });
            it('with "  I Ivan Petrovich"', function () {
                const anotherStudent = new Student('  I Ivan Petrovich');
                expect(student.compare(anotherStudent)).to.equal(false);
            });
            it('with "Ivanov I. P."', function () {
                const anotherStudent = new Student('Ivanov I. P.');
                expect(student.compare(anotherStudent)).to.equal(false);
            });
        });

        describe('clone', function () {
            it('without error', function () {
                expect(() => student.clone()).to.not.throw(Error);
            });
            it('instance of Student', function () {
                expect(student.clone()).to.be.an.instanceof(Student);
            });
            describe('compare with clone Student', function () {
                let cloneStudent;

                beforeEach(() =>{
                    cloneStudent = student.clone();
                });

                it('fullName is equal', function () {
                    expect(cloneStudent.getFullName()).to.equal(student.getFullName());
                });
                it('shortFullName is equal', function () {
                    expect(cloneStudent.getShortFullName()).to.equal(student.getShortFullName());
                });
                it('_isHealthy is equal', function () {
                    expect(cloneStudent.getIsHealthy()).to.equal(student.getIsHealthy());
                });
                it('_isHealthy is not equal', function () {
                    cloneStudent.setIsHealthy(true);
                    student.setIsHealthy(false);
                    expect(cloneStudent.getIsHealthy()).to.not.equal(student.getIsHealthy());
                });
            })
        });
    })
})