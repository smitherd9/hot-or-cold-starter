$(document).ready(function() {

    "use strict";


    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });


    ///////           Global Variables              ///////


    var secretNum;
    randomNum();
    var count = 0;
    var guessArray = [];
    var inputValue;


    ////    Function Expressions for creating feedback    ////

    var hot = createFeedback('You\'re hot!');
    var cold = createFeedback('You\'re cold!');
    var repeat = createFeedback('Don\'t repeat yourself!');
    var win = createFeedback('Congrats!  You won! Click "New Game" to play again.');
    var makeGuess = createFeedback('Make Your Guess!');
    var notNumber = createFeedback('Please Input a Number from 1 to 100.');



    // Handles game reset in order to play again

    function newGame() {
        randomNum();
        count = 0; // Resets to original value 
        $('#count').text(count); // Set this to print on screen
        $('#guessList').empty(); // Use .empty() to clear a <ul>
        guessArray = [];
        // plusFive = 0;
        // minusFive = 0;
        makeGuess();

    }


    // Generates a random number from 1 to 100 and assigns it to secretNum

    function randomNum() {
        secretNum = Math.floor((Math.random() * 100) + 1);
        console.log('You generated a random number.');
        // console.log(secretNum);
    }


    // Creates user feedback messages and places them in h2#feedback

    function createFeedback(message) {
        return function() {
            $('h2#feedback').text(message);
        };
    }


    // Gets value of input from user 

    function getInput() {
        var input = parseInt($('#userGuess').val(), 10);
        inputValue = input;
        $('#userGuess').val("");
        console.log('You submitted ' + input);

    }


    // Checks if a user guess exists in array,
    // if indexOf = -1 it does not exist and therefore pushes input to array.

    function checkGuessArray(input) {
        if (guessArray.indexOf(inputValue) == -1) {
            guessArray.push(inputValue);
            console.log(inputValue, 'input');

        } else {
            repeat();
        }
    }


    function checkUserGuess(input) {
        if (isNaN(inputValue)) {
            notNumber();
        } else if (inputValue == secretNum) {
            win();
        } else if (Math.abs(inputValue - secretNum) <= 5) {
            hot();
            continueGame();
        } else {
            cold();
            continueGame();
        }
    }



    $('.new').click(function() {
        newGame();
        console.log('You clicked New Game.');
    });


    $('form').submit(function(event) {
        event.preventDefault();
        getInput();
        checkGuessArray();
        checkUserGuess();

    });


    function continueGame() {
        $('ul#guessList').append('<li>' + inputValue + '</li>');
        count++; // Increments the count number 
        $('#count').text(count); // Set this to print on screen
    };






});
