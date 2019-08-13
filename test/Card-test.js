const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {

  let card

  beforeEach(() => {
    card = new Card({
      'index': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer': 'sea otter'
    })
  })

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    expect(card.question).to.equal('What is Robbie\'s favorite animal');
  });  

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });  

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('sea otter');
  });
});