var LetterPicked = require("./Letter.js");

var Word = function(string){
	this.value = string;
	this.arrLetters = [];
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
			
			var newLetter = new LetterPicked(letterString[i])

			this.arrLetters.push(newLetter)

		}
	}

	this.checkGuess = function(guess){
		for(i = 0; i < this.arrLetters.length; i++){
			this.arrLetters[i].compare(guess)
		}
	}

	this.gameOver = function (){
		var solved = true;
		for (var i = 0; i < this.arrLetters.length; i++){
		  
		  if (!this.arrLetters[i].guessed){
		  	solved = false;
		  }
		} return solved;
	}
}



// var newWord = new Word("bottle")

// newWord.wordLetters()
// newWord.checkGuess("t")
// newWord.checkGuess("b")
// newWord.checkGuess("e")
// console.log(newWord.displayValue())

module.exports = Word






