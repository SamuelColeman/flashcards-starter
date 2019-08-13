class Turn {
	constructor(guess, card) {
		this.guess = guess;
		this.card = card;
	}
	returnGuess() {
		return this.guess;
	}
	evaluateGuess() {
		if (this.guess === this.card.correctAnswer) {
			return true
		} else {
			return false
		}
	}
}

module.exports = Turn;