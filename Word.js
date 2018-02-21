var letterPicked = require("./Letter.js");

var Word = function(string){
	this.value = string;
	this.arrLetters = []
	// display value method.
	this.displayValue = function(){
		var displayLetter = ""

		for(i = 0; i < this.arrLetters.length; i++){
			displayLetter += this.arrLetters[i].letterShow()
		}
		return displayLetter
	}

	this.wordLetters = function(){

		var letterString = this.value.split("")
		// console.log(letters)

		for (var i = 0; i < letterString.length; i++){
			
			var newLetter = new letterPicked(letterString[i])

			this.arrLetters.push(newLetter)

		}
	}

	this.checkGuess = function(guess){
		for(i = 0; i < this.arrLetters.length; i++){
			this.arrLetters[i].compare(guess)
		}
	}
}

// var newWord = new Word("bottle")

// newWord.wordLetters()
// newWord.checkGuess("t")
// newWord.checkGuess("b")
// newWord.checkGuess("e")
// console.log(newWord.displayValue())

module.exports = Word






