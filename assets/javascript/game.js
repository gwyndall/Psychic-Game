// Declare variables including letter to guess, wins, losses, number of guesses left, and letters guessed

var wins = 0;
var losses = 0;
var numGuesses;
var lettersGuessed;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compLetter;


function newGame() {
    
    lettersGuessed = [];
    numGuesses = 8;
    document.getElementById('guessesLeft').textContent = numGuesses;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    
    //Computer selects a random letter
    compLetter = letters[Math.floor(Math.random() * letters.length)];
//    guessGame();
    console.log(compLetter);
    return compLetter;
}


function guessGame() {

    document.onkeyup = function (x) {
        var x = event.key;
        //On key event, compare key pressed var letters to validate a letter was selected
        //if not a letter, 
        if (!letters.includes(x)) {
            alert("That's not a letter. Please press a letter key.");

        //Compare user guess to computer letter
        //if not a match, alert ("Sorry, try again!");
        // losses++;
        // numGuesses--;
        } 
        else {
            if (x !== compLetter) {
                if (numGuesses > 1) {

                    alert("Sorry, guess again.");
                    numGuesses--;
                    document.getElementById('guessesLeft').textContent = numGuesses;
                    //append x to lettersGuessed[]
                    lettersGuessed.push(x)
                    document.getElementById('guesses').innerHTML = lettersGuessed
                } else {
                    alert("Sorry, you lose!  The answer was " + compLetter + ".  Let's play again.");
                    losses++;
                    document.getElementById('guesses').innerHTML = ''

                    newGame();
                }
            }
            //if match, alert ('You Win!  Let's play again.')
            else {
                alert("You win! Let's play again.");
                wins++;
                document.getElementById('wins').textContent = wins;
                newGame();
            }
        }

    }

};
