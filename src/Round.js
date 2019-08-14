const Turn = require('../src/Turn');

class Round {
	constructor(obj) {
		this.deck = obj;
		this.turns = 0;
		this.incorrectGuesses = [];
	}

	returnCurrentCard() {
		var currentCard = this.deck.cards[this.turns];
		return currentCard;
	}

	takeTurn(guess) {
		var turn = new Turn(guess, this.deck.cards[this.turns]); 
		var checkGuess = turn.evaluateGuess();
		if (checkGuess === false) {
			this.incorrectGuesses.push(this.deck.cards[this.turns].index)
		}
		this.turns++;
		return turn.giveFeedback();
	}

	calculatePercentCorrect() {
		var percentCorrect = this.incorrectGuesses.length / this.turns
		return Math.round(percentCorrect * 100)
	}

	endRound() {
		return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
	}
}

module.exports = Round;