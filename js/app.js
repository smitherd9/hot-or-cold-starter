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
    // randomNum() must be called before var plusFive and minusFive
    // are defined so that secretNum is == to a number before it is placed in plusFive, minusFive.  
    // If not, secretNum within plusFive/minusFive = NaN.  
    // In the hot or cold section, input > NaN always evaluates to false.
    randomNum();
    var count = 0;
    var plusFive = 0; // undefined + 5
    var minusFive = 0;
    var guessArray = [];



    function newGame() {
        randomNum();
        count = 0; // Resets to original value 
        $('#count').text(count); // Set this to print on screen
        $('#guessList').empty(); // Use .empty() to clear a <ul>
        guessArray = [];
        plusFive = 0;
        minusFive = 0;
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
        // check to see whether input exists in some guesses array.
        // if it is not there, then push it to the global array

        $('#userGuess').val("");

        // Checks if a user guess exists in array,
        // if indexOf = -1 it does not exist and therefore pushes input to array.
        if (guessArray.indexOf(input) == -1) {  
            guessArray.push(input); 

            // true or false = true; false or true = true, false or false = false
            plusFive = secretNum + 5;
            minusFive = secretNum - 5;
            
            console.log(plusFive, '+5');
            console.log(minusFive, '-5');
            console.log(input, 'input');
            if (input == secretNum) {
                win();

            } else if (((input > secretNum) && (input <= plusFive)) || ((input < secretNum) && (input >= minusFive))) {
                hot();
                continueGame();
            } else {
                cold();
                continueGame();
            };
        } else {
            $('h2#feedback').text("Don't repeat yourself!");
        }

        console.log('You submitted ' + input);


        function continueGame() {
            $('ul#guessList').append('<li>' + input + '</li>');
            count++; // Increments the count number 
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

    


});
