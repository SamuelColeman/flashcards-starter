const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
  	this.currentRound = 0;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
  	this.currentRound++;
  	var deck = new Deck(prototypeQuestions);
  	var round = new Round(deck);
  	this.printMessage(deck, round);
  	this.printQuestion(round);
  }
}

module.exports = Game;