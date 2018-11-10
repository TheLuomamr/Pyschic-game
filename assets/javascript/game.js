
/* letter variable array*/
var computerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/*set variables for the game*/
var wins = 0;
var losses = 0;
var guesses = 7;
var guessesLeft = 7;
var guessedLetters = [];
var computersChoice;


/*computer to choose letter*/
var newLetterChoice = function() {
    computersChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
};


/*chosen letters on html*/
var progress = function() {
    document.getElementById("guessedLetter").innerHTML = "Letters Chosen So Far: " + guessedLetters.join(",");
};


/*guess left function*/
var guessesLeftYet = function() {
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};


var newGame = function() {
	guessedLetters = [];
    guessesLeft = 7;
    newLetterChoice();
    guessesLeftYet();
    progress();
}


/*create game function for winning and losing*/
document.onkeyup = function(event) {
	var userGuess = event.key;
    guessesLeft--;
    guessedLetters.push(userGuess);
    progress();
    guessesLeftYet();
    if (guessesLeft > 0) {
        if (userGuess == computersChoice) {
        	wins++;
        	document.getElementById("wins").innerHTML = "Wins:" + wins;
            newGame();
        }

    } else if (guessesLeft == 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = "Losses:" + losses;
        newGame();
    }
};