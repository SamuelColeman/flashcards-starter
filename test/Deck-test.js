const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  let card1
  let card2
  let card3
  let deck

  beforeEach(() => {
  	card1 = new Card({
  		'index': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'});
		card2 = new Card({
			'index': 14, 'question': 'What organ is Khalid missing?', 'answers': ['spleen', 'appendix', 'gallbladder'], 'correctAnswer': 'gallbladder'});
		card3 = new Card({
			'index': 12, 'question': 'What is Travis\'s middle name?', 'answers': ['Lex', 'William', 'Fitzgerald'], 'correctAnswer': 'Fitzgerald'});
		deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to count the number of cards in the deck', function() {
    expect(deck.countCards()).to.equal(3);
  });
})