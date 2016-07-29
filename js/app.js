$(document).ready(function() {


    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    var secretNum;
    var count = 0;
    var plusFive = secretNum + 5;
    var minusFive = secretNum - 5;

    

    function newGame() {
        randomNum();
        count = 0; // Resets to original value 
        $('#count').text(count); // Set this to print on screen
        $('#guessList').empty(); // Use .empty() to clear a <ul>
        $('h2#feedback').text('Make your Guess!')
    }

    function randomNum() {
        secretNum = Math.floor((Math.random() * 100) + 1);
        console.log('You generated a random number.')
        console.log(secretNum);
    }

    $('.new').click(function() {
        newGame();
        console.log('You clicked New Game.')
    });


    $('form').submit(function(event) {
        event.preventDefault();
        var input = parseInt($('#userGuess').val(), 10); // Submit the form, parse the actual input number
        $('#userGuess').val("");

        console.log('You submitted ' + input);
        

        if ((input > secretNum) && (input < plusFive)) {
            hot();
            continueGame();
        }

        else if ((input < secretNum) && (input > minusFive)) {
        	hot();
        	continueGame();
        }

        else if ((input > plusFive) || (input < minusFive)) {
        	cold();
        	continueGame();
        }

        else if (input == secretNum) {
        	win();
        };


    

    function continueGame() {
        $('ul#guessList').append('<li>' + input + '</li>');
        count++; 				 // Increments the count number 
        $('#count').text(count); // Set this to print on screen
    };

    });


    function hot() {
    	$('h2#feedback').text("You're hot!");
    	
    };

    function cold() {
        $('h2#feedback').text("You're cold!")
        
    };

    function win() {
        $('h2#feedback').text('Congrats!  You won! Click "New Game" to play again.');
    };

    //         plusFive = input ? (hot());
    //     minusFive = input ? (hot())
    //     plusFive ? != input : cold();
    //     minusFive ? != input : cold();

    //     input ? = secretNum : win();

    // });


    

    // input == secretNum + 5 ? (
    // 	$('h2#feedback').text("You're hot!"), 
    // 		$('ul#guessList').append('<li>' + input + '</li>'),
    // 		count++,					// Increments the count number 
    // 		$('#count').text(count)	// Set this to print on screen
    // 	) 
    // });

    // 	if (input = secretNum) {
    // 		$('h2#feedback').text('Congrats!  You won! Click "New Game" to play again.');
    // 	}

    // 	else if (input > secretNum && < (secretNum - 5) ||  (secretNum  + 5)) {
    // 		$('h2#feedback').text("You're hot!"); 
    // 		$('ul#guessList').append('<li>' + input + '</li>');
    // 		count++;					// Increments the count number 
    // 		$('#count').text(count);	// Set this to print on screen		

    // 	}

    // 	else 	{
    // 		$('h2#feedback').text("You're cold!") 
    // 		$('ul#guessList').append('<li>' + input + '</li>');
    // 		count++;					// Increments the count number 
    // 		$('#count').text(count);	// Set this to print on screen		
    // 	}

    // });


    // $('#guessButton').click(function(event){
    // 	event.preventDefault();
    // 	var input = parseInt($('#guessButton').val(), 10);


    // 	if (input != secretNum) {
    // 		alert('Try Again!');

    // 	}

    // });


    // $('#count')function userGuess() {
    // 	if (input !== secretArray) {
    // 		append()
    // 	}
    // }



});
