// 2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

// 3. Use key events to listen for the letters that your players will type.

// When this document is ready, the computer generates and chooses one of the words in its array.
/*
var randomWordArr = ["apple", "banana", "pear", "lychee", "strawberry", "pineapple", "watermelon", "honeydew", "cantalope", "cherry"];
var wins = 0;
var currentWord = [];
var lives = 10;
var userInput = [];
var dashes = ""
var newWord = [];

$(document).ready(function() {
$("#wins, #currentWord, #currentWordDiv, #lives, #lettersGuessed").empty();
	var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
	// we want to set the value stored in the variable newword to an array that will have the exact same length as currentWord	
	 newWord = new Array(randomWord.length);
	console.log("newWord.length:" + newWord.length);
	

	/* for (var i = 0; i < newWord.length; i++) {
		newWord[i] = "_ "; 

		$("#currentWordDiv").append(" " + newWord[i])
		currentWord.push(randomWord[i]);
		/* var newDiv = $("<button>");
		newDiv.addClass("char");
		newDiv.attr('value', randomWord[i]);
		newDiv.text(newWord[i])
		$("#currentWordDiv").append(newDiv); */ 
		// create a for loop that will create multiple <button> dividers.
		// create variable for wins

		// create variable for lives 
/*
	if (lives > 0) {
		document.addEventListener('DOMContentLoaded', () => {

			document.addEventListener('keydown', event => {
				const charList = 'abcdefghijklmnopqrstuvwxyz'
				const key = event.key.toLowerCase();
				var value = event.key.toLowerCase();

				// we are only interested in the alphabetical characters in charList
				if (charList.indexOf(key) === -1 ) {
				return; }
				else {
					// this will check if the key that was hit is a key that is in our array!
					console.log("key:" + key)
					if (currentWord.indexOf(key) >= 0) {
						for (var i = 0; i < newWord.length; i++) {
							if (value === currentWord[i]) {
							newWord[i] = value + " ";
							$("currentWordDiv").append(newWord)
						}
						}
						alert("you hit a key bro") */
					
	/* userGuess.toLowerCase();
	if (typeof userGuess === 'string') {
		lettersGuessed = "";
		lettersGuessed += ", " + userGuess;};}; */ 
// create array for letters guessed. 
/* 	idk about this for now ---->  for ( var i = 0; lives > 0; i++) {
	var lettersGuessed = [];
	var userInput = [];
	userInput.push(event.key);
	console.log("userInput=" + userInput)
	$("#lettersGuessed").text(userInput[i]); 
	}; */


// created a function that takes in an event and keypress as parameters 
/* 
function checkGuess(event,isKeyPress){
	// created a variable called currentButton and theLetter 
        var currentButton;
		var theLetter;
		// set currentButton's value equal to $(event.target)
        currentButton = $(event.target);
        $(currentButton).attr("disabled", "disabled");
        theLetter = $(currentButton).text().toLowerCase();
        alert(theLetter);
}  */ 

// 4. Display the following on the page:
// 5. "Press any key to get started!"                $("#instructions")

// 6. Wins: (# of times user guessed the word correctly).           $("#wins")


//    * If the word is `madonna`, display it like this when the game starts: _ _ _ _ _ _ 
		//
		
//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

// 7. Number of Guesses Remaining: (# of guesses remaining for the user).


// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// check letter 


// 9. After the user wins/loses the game should automatically choose another word and make the user play it.



// Create an Array that will hold multiple strings. 

	// --------------
	// Test code: 
	

	// this line of code will display the hiddenWord to the screen
	
	// computer's choices of words 
	var randomWordArr = ["apple", "banana", "pear", "lychee", "strawberry", "pineapple", "watermelon", "honeydew", "cantalope", "cherry"];
	// playerWins
	var wins = 0;
	// playerLives
	var lives = 10;
	
	var hiddenWord = [];

	var acceptedInput = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	
	$(document).ready(function() {
		$( "#currentWord, #currentWordDiv, #lives, #lettersGuessed").empty();
		// this is weeb as fuck lol
			alert("Game Start!")
			// display value for lives & wins 
			$("#lives").text("Lives Remaining:" + lives);
			$("#wins").text("Wins: " + wins);
			// creates a randomword on start. 
			var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
			// we want to set the value stored in the variable newword to an array that will have the exact same length as currentWord	
			hiddenWord = new Array(randomWord.length);
			// we want to loop through the length of the word to set the value of hiddenWord = "_" times the length of the word.
			let gameWon = false;
				// currentWord is an empty array that we will later use to store the word.
			var answer = ""; 

				for (var i = 0; i < randomWord.length; i++) {
						hiddenWord[i] = "_ ";
						answer += randomWord[i];
						console.log("console.log: answer: " + answer[i])
						$("#currentWordDiv").append(hiddenWord[i]); 
				}

				if (gameWon === false && lives > 0) {
				// while the game is not won yet, we will continue to listen for keys 
					$(document).on('keyup', function(event) {
					// capture the value of event.key and store it in a variable called guess (this is the value of the userrs guess)
					var guess;
					var lettersGuessed = [];

					// we create a for loop to make sure that the guess is one of the letters in our accepted inputs array (alphtabetical char)
						for (var i = 0; i < acceptedInput.length; i++) {
							// if the guess matches with one of the alphabetical chars, we run the next lines of code.
							if (event.key === acceptedInput[i]) {
								// we want lowercase guess
									guess = event.key;
									// we want to delete this from acceptedInput so that the user cannot guess it again.
									console.log(acceptedInput[i]);

									acceptedInput = acceptedInput[i].slice
									// before and after console logs to test functionality of the slice.
									console.log(acceptedInput[i]);
									// a for loop that will loop through all of the characters of the answer array 
								for (i = 0; i < answer.length; i++) {
								// this is code to determine if the guess is a correct guess. 
									if (guess === answer.charAt(i)) { 
										// all instances of that correct guess will be captured and updated properly.
										hiddenWord[i] = guess 
									/*	// code to test functionality.
										console.log("User has guessed a correct letter console.log():" + [i] + "position: " + hiddenWord[i]);
										alert("User has guessed a correct letter console.log(): in " + [i] + "position " + hiddenWord[i]);		*/
										lettersGuessed.push(guess);
										// we will append the guess to the display div area created.
										$("#lettersGuessed").append(guess);
										// call a function here that will test if the game is won. 
										checkGameWon() 
										}	
										else {
											// lose 1 life because the answers not correct.
											lives = lives - 1;
											chceckLives();
											return;
											$("#lives").text("Lives Remaining: " + lives) }
									}
								}
							}
						})
						
				};
			});

	;




	// defining a function that will check if gameWon should be true.
	function checkGameWon () {
		for (i = 0; i < hiddenWord.length; i++) {
			if (hiddenWord[i] === "_") { 
				gameWon = false;
			} else {
				gameWon = true;
				alert("Congratulations You Won!");
			}
		}
	}

	// function for checkLives
	function chceckLives() {
		if (lives === 1) {
			alert("game over you lose!");
		} 
	}


