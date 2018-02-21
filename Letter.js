var letterPicked = function(displayLetter){
	this.displayLetter = displayLetter;
	this.guessed = false;

	this.letterShow = function(){
		if (this.guessed === true){
			return displayLetter
		}
		else{
			return "_"
		}
	}

	this.compare = function(guess){
		if (this.displayLetter === guess){
			this.guessed = true;
			return true
		}
		else{
			return false
		}
	}
}; 

module.exports = letterPicked






































