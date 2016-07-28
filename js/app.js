
$(document).ready(function(){


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

var secretNum;

  	// var secretNum = Math.floor((Math.random() * 100) + 1);

  	function newGame(){
		randomNum();
		$('#count') === 0;
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

  		
	$('form').submit(function(event){
		event.preventDefault();
		var input = parseInt($('form').val(), 10);
		$('form').val("");
		
		console.log('You submitted ' + input);


		if (input != secretNum) {
			$('.guessBox').append(input);
			var count = $('#count');
			count++;
			alert('Try Again!');
		}

		else {
			$('#feedback').text('Congrats!  You won!');
		
		}

	});


	// $('#guessButton').click(function(event){
	// 	event.preventDefault();
	// 	var input = parseInt($('#guessButton').val(), 10);
		

	// 	if (input != secretNum) {
	// 		alert('Try Again!');

	// 	}

	// });


	// $('#count')function userGuess() {
	// 	if (input != secretArray) {
	// 		append()
	// 	}
	// }

	

});


