// Declare variables including letter to guess, wins, losses, number of guesses left, and letters guessed

var wins = 0;
var losses = 0;
var numGuesses = 8;
var letters;
var lettersGuessed = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letter;

function randLetter() {

    document.getElementById('guessesLeft').textContent = numGuesses;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;

    //Computer selects a random letter


    var letter = letters[Math.floor(Math.random() * letters.length)];

    console.log(letter);

    //While numGuesses is > 0:

    document.onkeyup = function (x) {
        var x = event.key;
        //On key event, compare key pressed var letters to validate a letter was selected
        //if not a letter, 
        if (!letters.includes(x)) {
            alert("That/'s not a letter. Please press a letter key.");

            //Compare user guess to computer letter
            //if not a match, alert ("Sorry, try again!");
            // losses++;
            // numGuesses--;
        } else if (x !== letter) {
            alert("Sorry, guess again.");
            numGuesses--;
            document.getElementById('guessesLeft').textContent = numGuesses;
            //append x to lettersGuessed[]
        }
        //if match, alert ('You Win!  Let's play again.')
        // wins++;
        else {
            alert("You win! Let's play again.");
            wins++;
            document.getElementById('wins').textContent = wins;
            numGuesses = 8;
            randLetter();
        }
    }

    //When numGuesses = 0 :
    // alert("Sorry, you lose!  Let's play again.");
    // losses--;
    // randLetter();



};