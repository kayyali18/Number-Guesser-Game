//Connect guess
var input = document.querySelector ('input');
var guessButton = document.querySelector ('#guess');
var clearButton = document.querySelector ('#clear')


guessButton.addEventListener('click', function () {
  event.preventDefault ();
  var userGuess = input.value;
  console.log (userGuess);
});
