'use strict';

describe('Bowling', function() {
  var bowling;

  bowling = new Bowling;

  it('User can input one roll', function(){
    bowling.firstThrow(3);
    expect(bowling.frame.first).toEqual(3);
  });

  it('User can make a second roll and both score accumulate for a frame', function(){
    bowling.firstThrow(3);
    bowling.secondThrow(6);
    expect(bowling.frameScore()).toEqual(9);
  });

  it('User can make a Strike', function(){
    bowling.firstThrow(10);
    bowling.isStrike();
    expect(bowling.strike).toEqual(true);
  });

  it("Check Strike is not set if 10 pins are scored on 2 throws", function(){
    bowling.firstThrow(5);
    bowling.secondThrow(5);
    bowling.isStrike();
    expect(bowling.strike).toEqual(false);
  });

  it("User can make a Spare", function(){
    bowling.firstThrow(5);
    bowling.secondThrow(5);
    bowling.isSpare();
    expect(bowling.spare).toEqual(true);
  });

  it("Scores does not update after a strike", function(){
    bowling.firstThrow(10);
    expect(bowling.currentScore).toEqual(0);
  });

  it("Scores is set correctly after multiple strikes", function(){
    bowling.firstThrow(10);
    // bowling.firstThrow(10);
    // bowling.firstThrow(10);
    // bowling.firstThrow(7);
    // bowling.secondThrow(2);
    // bowling.firstThrow(3);
    // bowling.secondThrow(4);
    expect(bowling.currentScore).toEqual(92);
  });

});