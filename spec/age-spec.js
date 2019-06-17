import { Age } from './../src/spaceage.js';

describe('earthAge', function() {
  let human;

  beforeEach(function() {
    human = new Human(30, 84);
  });

  it("Returns user's Earth age in seconds", function() {
    expect(human.ageInSeconds()).toEqual(946708560);
  });

  it("Takes the user's Earth age and return it in Mercury years", function() {
    expect(human.ageEarthToMercury()).toEqual(125);
  });

  it("Based on user's Earth age return their approximate remaining life in Mercury years", function() {
    expect(human.mercuryTimeLeft()).toEqual(208);
  });
