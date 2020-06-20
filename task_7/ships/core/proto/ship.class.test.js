'use strict';

describe('Class Ship', function () {
    let ship;

    beforeEach(() => {
        ship = new Ship();
        ship.name = 'Test';
        ship._position = {x: 12, y: 10};
        ship._color = 'black';
    });

    describe('Function move', function () {
        it('without arguments', function () {
            expect(() => ship.move())
                .to.throw('"undefined" является не допустимым направлением движения.');
        });
        it('with first argument is not list (\'n\' - север, \'w\' - запад, \'s\' - юг, \'e\' - восток)', function () {
            expect(() => ship.move('nw'))
                .to.throw('"nw" является не допустимым направлением движения.');
        });
        it('with first argument "n"', function () {
            expect(ship.move('n'))
                .to.deep.equal({x: 12, y: 9});
        });
        it('with first argument "w"', function () {
            expect(ship.move('w'))
                .to.deep.equal({x: 11, y: 10});
        });
        it('with first argument "s"', function () {
            expect(ship.move('s'))
                .to.deep.equal({x: 12, y: 11});
        });
        it('with first argument "e"', function () {
            expect(ship.move('e'))
                .to.deep.equal({x: 13, y: 10});
        });
        it('first argument "e" and second is string', function () {
            expect(() => ship.move('e', 'qwe'))
                .to.throw(`Значение "qwe" является не допустимым.`);
        });
        it('first argument "e" and second is -10', function () {
            expect(() => ship.move('e', -10))
                .to.throw(`Значение "-10" является не допустимым.`);
        });
        it('with first argument "e" and second is 10', function () {
            expect(ship.move('e', 10))
                .to.deep.equal({x: 22, y: 10});
        });
    });

    describe('Function moveTo', function () {
        it('ship dropped anchor', function () {
            ship.dropAnchor();

            expect(() => ship.moveTo(1, 2))
                .to.throw(`Корабль Test стоит на якоре.`);
        });
        it('ship move to (12, 9)', function () {
            expect(ship.moveTo(12, 9))
                .to.deep.equal({x: 12, y: 9});
        });
        it('ship move to (12, 19)', function () {
            expect(ship.moveTo(12, 19))
                .to.deep.equal({x: 12, y: 19});
        });
    });

    describe('Function dropAnchor', function () {
        it('ship dropped anchor', function () {
            ship.dropAnchor();

            expect(ship.isAnchorDropped())
                .to.equal(true);
        });
    });

    describe('Function raiseAnchor', function () {
        it('ship dropped anchor', function () {
            ship.raiseAnchor();

            expect(ship.isAnchorDropped())
                .to.equal(false);
        });
    });

    describe('Function setColor', function () {
        it('ship dropped anchor', function () {
            ship.setColor('blue');

            expect(ship._color)
                .to.equal('blue');
        });
    });

    describe('Function getColor', function () {
        it('ship dropped anchor', function () {
            ship.setColor('green');

            expect(ship.getColor())
                .to.equal('green');
        });
    });

    describe('Function setState', function () {
        it('argument is not a number', function () {
            expect(() => ship.setState('1, 2'))
                .to.throw(Error);
        });
        it('argument is 50', function () {
            ship.setState(50);
            expect(ship._state)
                .to.equal(50);
        });
    });

    describe('Function getState', function () {
        it('argument is 25', function () {
            ship.setState(25);
            expect(ship.getState())
                .to.equal(25);
        });
    });

    describe('Function getPosition', function () {
        it('return is {x: 12, y: 10}', function () {
            expect(ship.getPosition())
                .to.deep.equal({x: 12, y: 10});
        });
    });

    describe('Function getParams', function () {
        it('return is {x: 12, y: 10}', function () {
            expect(() => ship.getParams())
                .to.throw('Необходимо имплиментировать метод.');
        });
    });
});