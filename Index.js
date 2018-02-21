var inquirer = require("inquirer");
var letterPicked = require("./Letter.js");
var Word = require("./Word.js");


var personArr = ["Jose", "Jack", "David", "Javier", "Carlo", "Robinson"];
var random = Math.floor(Math.random() * personArr.length);
var personName = personArr[random]
	// console.log(personName)
var newWord = new Word(personName);
newWord.wordLetters()
newWord.checkGuess("o")
newWord.checkGuess("a")
newWord.checkGuess("e")
console.log(newWord.displayValue())
// displayValue()
// wordLetters()

// console.log()

var GuessLetter = function(){

inquirer.prompt([
{
	type: "input",
	message: "Pick a letter.",
	name: "letter"
},
	// displayValue()

]).then(function(){
	// console.log(displayValue())
	GuessLetter()
	// if(){
     
	// }
	// else{

	// }
});
}
GuessLetter()