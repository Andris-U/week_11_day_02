const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dino1;
  let myPark;

  beforeEach(function () {
    dino1 = new Dinosaur('Chachisaurus', 'carnivore', 10);
    dino2 = new Dinosaur('Cuquisaurus', 'hervibore', 15);
    myPark = new Park('Dino\'s', 5, [dino1]);
  })

  it('should have a name', function () {
    const actual = myPark.name;
    assert.strictEqual(actual, 'Dino\'s');
  });

  it('should have a ticket price', function () {
    const actual = myPark.ticketPrice;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = myPark.dinos.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to add a dinosaur to its collection', function () {
    myPark.addDino(dino2);
    const actual = myPark.dinos.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to remove a dinosaur from its collection', function () {
      myPark.removeDino();
      const actual = myPark.dinos.length;
      assert.strictEqual(actual, 0);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = myPark.findAllBySpecies('Chachisaurus');
    assert.deepEqual(actual, [dino1]);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    myPark.addDino(dino2);
    myPark.addDino(dino1);
    myPark.removeAllBySpecies('Chachisaurus');
    const actual = myPark.dinos;
    assert.deepEqual(actual, [dino2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    myPark.addDino(dino2);
    const actual = myPark.findPopularDino();
    assert.equal(actual, dino2)
  });

  it('should be able to calculate total visitors per day', function() {
    myPark.addDino(dino2);
    const actual = myPark.visitsPerDay();
    assert.strictEqual(actual, 25);
  });

  it('should be able to calculate total visitors per year', function() {
    myPark.addDino(dino2);
    const actual = myPark.visitsPerYear();
    const expected = (dino1.guestsAttractedPerDay + dino2.guestsAttractedPerDay) * 365;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total ticket revenue per year', function(){
    myPark.addDino(dino2);
    const actual = myPark.ticketRevenuePerYear();
    assert.strictEqual(actual, 12775);
  });

});
