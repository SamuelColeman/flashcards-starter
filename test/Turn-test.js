const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Card', () => {

  let card
  let turn

  beforeEach(() => {
    card = new Card({
      'index': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'
    })
    turn = new Turn('pug', card)
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
  	expect(turn.guess).to.equal('pug');
  });

  it('should store a card', function() {
  	expect(turn.card).to.equal(card);
  });

  it('should be able to return guess', function() {
  	expect(turn.returnGuess()).to.equal('pug');
  });

  it('should be able to check if the guess equals the correct answer', function() {
  	expect(turn.evaluateGuess()).to.equal(false);
  });
});