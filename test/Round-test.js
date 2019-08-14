const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', () => {

  let card1
  let card2
  let card3
  let deck
  let round
  let turn

  beforeEach(() => {
  	card1 = new Card({
  		'index': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
		card2 = new Card({
			'index': 14, 'question': 'What organ is Khalid missing?', 'answers': ['spleen', 'appendix', 'gallbladder'], 'correctAnswer': 'gallbladder'});
		card3 = new Card({
			'index': 12, 'question': 'What is Travis\'s middle name?', 'answers': ['Lex', 'William', 'Fitzgerald'], 'correctAnswer': 'Fitzgerald'});
		deck = new Deck([card1, card2, card3]);
		turn = new Turn('pug', card1);
		round = new Round(deck);
	})

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to return the current card', function() {
  	expect(round.returnCurrentCard()).to.eql(card1);
  });

  it('should create a new instance of Turn when a guess is made', function() {
  	round.takeTurn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should update the turns count when a guess is made', function() {
  	round.takeTurn('pug');
  	expect(round.turns).to.equal(1);
  });

  it('should update the current card to the next card', function() {
  	round.takeTurn();
  	expect(round.returnCurrentCard()).to.eql(card2);
  }); 

  it('should store the incorrect guesses ids in an array', function() {
  	round.takeTurn('pug');
  	expect(round.incorrectGuesses).to.eql([card1.index]);
  });

  it('should return feedback based on the guess', function() {
  	expect(round.takeTurn('pug')).to.equal('incorrect!');
  });

  it('should return the percentage of correct guesses', function() {
  	round.takeTurn('pug');
  	expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it('should display a message that the round is over', function() {
  	round.takeTurn('pug');
  	expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
  });  
})