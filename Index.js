var inquirer = require("inquirer");
// var LetterPicked = require("./Letter.js");
var Word = require("./Word.js");

var letterArray = [];
var wins = 0;
var losses = 0;
var guessLeft = 5;

//function that shows the values of wins, losses, guess left, empty array and the word to be guess.
function show(){
	console.log("Wins " + wins);
	console.log("Losses " + losses);
	console.log("Guesses left " + guessLeft);
	console.log(newWord.displayValue());
	console.log(letterArray);
}

var personArr = ["jose", "jack", "david", "javier", "carlo", "robinson"];
var random = Math.floor(Math.random() * personArr.length);
var personName = personArr[random]
	// console.log(personName)

var newWord = new Word(personName);
newWord.wordLetters()
// newWord.checkGuess();
// newWord.checkGuess();
// newWord.checkGuess("a");
newWord.displayValue()
// displayValue()
// wordLetters()

// console.log()

//calls the show() function then run the prompt for user input.
var GuessLetter = function(){
show();
inquirer.prompt([
{
	type: "input",
	name: "letter",
	message: "Pick a letter."
},
]).then(function(response){
	var guess = response.letter[0];
	// console.log(displayValue())
	if(letterArray.includes(guess) || !guess){
		return GuessLetter()
	}
	
	letterArray.push(guess);
	var corrGuess = newWord.checkGuess(guess)
	// GuessLetter()
	if(corrGuess){
	  if (newWord.gameOver()){
		wins++
		console.log("bingo!!")
		// return;
	  }
	}
	else{
		guessLeft --;
		if(guessLeft === 0){
			console.log("game over");
			losses ++
			// GuessLetter()
			// return

	}
		}
	newWord.checkGuess(guess)
	GuessLetter()
});
}
GuessLetter()
