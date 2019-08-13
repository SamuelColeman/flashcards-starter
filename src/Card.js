class Card {
	constructor(obj) {
		this.index = obj.index;
		this.question = obj.question;
		this.answers = obj.answers;
		this.correctAnswer = obj.correctAnswer;
	}
}

module.exports = Card;