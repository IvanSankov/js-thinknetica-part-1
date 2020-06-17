'use strict';

describe('Class Shipyard', function () {
    let shipyard;

    beforeEach(() => {
        shipyard = new Shipyard();
        shipyard._position = {x: 10, y: 30};
    });

    describe('Function buildShip', function () {
        it('is Boat', function () {
            shipyard._factory = Boat;
            const boat = shipyard.buildShip('boat', 10, 'steel');

            expect(boat).to.be.an.instanceof(Boat);
            expect(boat.name).to.equal('boat');
            expect(boat.material).to.equal('steel');
            expect(boat.power).to.equal(10);
            expect(boat.getPosition()).to.deep.equal(shipyard._position);
        });
    });

    describe('Function repairShip', function () {
        it('first argument is not Ship', function () {
            expect(() => shipyard.repairShip())
                .to.throw(Error);
        });
        it('first argument is Bot, but shipyard only for Sailing Ship', function () {
            shipyard._factory = Boat;
            const boat = shipyard.buildShip('boat', 10, 'steel');
            shipyard._factory = SailingShip;

            expect(() => shipyard.repairShip(boat))
                .to.throw(Error);
        });
        it('корабль не на верфи', function () {
            shipyard._factory = Boat;
            const boat = shipyard.buildShip('boat', 10, 'steel');

            boat.move('n');

            expect(() => shipyard.repairShip(boat))
                .to.throw(`Корабль boat не находится на этой верфи`);
        });
        it('Передаем корректные параметры', function () {
            shipyard._factory = Boat;
            const boat = shipyard.buildShip('boat', 10, 'steel');
            shipyard.repairShip(boat, 10);

            expect(boat.getState()).to.equal(10);
        });
    });

    describe('Function paintShip', function () {
        it('Корабль не на верфи', function () {
            shipyard._factory = Boat;
            const boat = shipyard.buildShip('boat', 10, 'steel');

            boat.move('n');

            expect(() => shipyard.paintShip(boat))
                .to.throw(`Корабль boat не находится на этой верфи`);
        });
        it('Красим корабль, который не строится на этой верфи', function () {
            shipyard._factory = Boat;
            const boat = shipyard.buildShip('boat', 10, 'steel');
            shipyard._factory = SailingShip;

            shipyard.paintShip(boat, 'red');
            expect(boat.getColor()).to.equal('red');
        })
    });

    describe('Function replaceShip', function () {
        it('first argument is not Ship', function () {
            expect(() => shipyard.replaceShip())
                .to.throw(Error);
        });
        it('first argument is Bot, but shipyard only for Sailing Ship', function () {
            shipyard._factory = Boat;
            const boat = shipyard.buildShip('boat', 10, 'steel');
            shipyard._factory = SailingShip;

            expect(() => shipyard.replaceShip(boat))
                .to.throw(Error);
        });
        it('корабль не на верфи', function () {
            shipyard._factory = Boat;
            const boat = shipyard.buildShip('boat', 10, 'steel');

            boat.move('n');

            expect(() => shipyard.replaceShip(boat))
                .to.throw(Error);
        });
        it('Передаем корректные параметры', function () {
            shipyard._factory = Boat;
            const boat = shipyard.buildShip('boat', 10, 'steel');
            const newBoat = shipyard.replaceShip(boat);

            expect(newBoat.getState()).to.equal(100);
            expect(newBoat.name).to.equal(boat.name);
            expect(newBoat.power).to.equal(boat.power);
            expect(newBoat.material).to.equal(boat.material);
        });
    });

    describe('Function _getFactory', function () {
        it('factory is undefined', function () {
            expect(() => shipyard._getFactory())
                .to.throw('Вы должны указать класс, из которого будет создан корабль.');
        });
        it('factory is not Ship', function () {
            shipyard._factory = {'a': 'a'};
            expect(() => shipyard._getFactory())
                .to.throw('Фабрика должна быть дочерним элементом класса Ship');
        });
        it('factory is Ship', function () {
            shipyard._factory = Boat;
            expect(() => shipyard._getFactory())
                .to.deep.equal(Boat);
        });
    });
});