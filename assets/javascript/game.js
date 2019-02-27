// 2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

// 3. Use key events to listen for the letters that your players will type.

// When this document is ready, the computer generates and chooses one of the words in its array.
var hangman = {
	randomWordArr: ["apple", "banana", "pear", "lychee", "strawberry", "pineapple", "watermelon", "honeydew"
, "cantalope", "cherry"],
	wins: 0,
	guessesRemaining: 10,
	lettersGuessed: 0,
}

$(document).ready(function (){
	// created a variable to store the value of the array in hangman. 
randomWordArray = hangman.randomWordArr;
// choose a word from our array at random
var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
console.log("randomWord= " + randomWord);
// create variable for lives
var lives = hangman.guessesRemaining;
console.log(lives);
// create variable for wins
var playerWins = hangman.wins;
console.log("playerwins=" + playerWins);
$("#lives").text("Lives Remaining:" + lives);
$("#wins").text("Wins: " + playerWins);
// create array for letters guessed. 
/* 	idk about this for now ---->  for ( var i = 0; lives > 0; i++) {
	var lettersGuessed = [];
	var userInput = [];
	userInput.push(event.key);
	console.log("userInput=" + userInput)
	$("#lettersGuessed").text(userInput[i]); 
	}; */


// create a for loop that will create multiple <button> dividers.
for (var i = 0; i < randomWord.length; i ++) {

	var hiddenChar = $("<button>"); 

	hiddenChar.addClass("char");

	hiddenChar.attr('data-letter', randomWord[i]);

	hiddenChar.text("_");
	console.log("hiddenChar:" + hiddenChar.text)

	$("#currentWordDiv").append(hiddenChar); };

	console.log("hiddenChar=" + hiddenChar.text);
});

// created a function that takes in an event and keypress as parameters 
function checkGuess(event,isKeyPress){
	// created a variable called currentButton and theLetter 
        var currentButton;
		var theLetter;
		// set currentButton's value equal to $(event.target)
        currentButton = $(event.target);
        $(currentButton).attr("disabled", "disabled");
        theLetter = $(currentButton).text().toLowerCase();
        alert(theLetter);
}  

// 4. Display the following on the page:
// 5. "Press any key to get started!"                $("#instructions")

// 6. Wins: (# of times user guessed the word correctly).           $("#wins")


//    * If the word is `madonna`, display it like this when the game starts: _ _ _ _ _ _ 
		//
		
//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

// 7. Number of Guesses Remaining: (# of guesses remaining for the user).
console.log(hangman.guessesRemaining) 
$("#guessesRemaining").text("Guesses Remaining!:" + hangman.guessesRemaining );
// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// 9. After the user wins/loses the game should automatically choose another word and make the user play it.



// Create an Array that will hold multiple strings. 
