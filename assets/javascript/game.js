// 2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

// 3. Use key events to listen for the letters that your players will type.

// When this document is ready, the computer generates and chooses one of the words in its array.

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
	

	for (var i = 0; i < newWord.length; i++) {
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
		console.log("wins=" + wins);
		// create variable for lives 
		$("#lives").text("Lives Remaining:" + lives);
		$("#wins").text("Wins: " + wins);
		console.log("console.log: currentWord " + currentWord[i])
	};
	});

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
						alert("you hit a key bro") 
						}
					}
					});
				});
				
			};
		;
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


// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// check letter 
function checkletter() {
	var value = $(".char").value;
	console.log(value);
	value = value.toLowerCase(); 
		for (var i = 0; i < newword.length; i++) {

        if (value === randomword[i]) {
            newword[i] = value + " ";
            var status = true;
        };
};

// 9. After the user wins/loses the game should automatically choose another word and make the user play it.



// Create an Array that will hold multiple strings. 
$('#instructions').text("you have" + " " + lives + " " + "tries " + "left");
	var wongame;
	for (var j = 0; j < currentWord.length; j++) {
			if (currentWord[j] === "_ ") {
				wongame = false;
			}
		}
		if (wongame == true) {
			alert("You win! Congratulations!!!!");
			sortingComplete();
			fireworks();
	
		}
	}