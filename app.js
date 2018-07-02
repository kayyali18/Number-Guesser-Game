/*          Functions         */

//Check user input

function get_nums (userAnswer) {
  if (userAnswer === null || isNaN (userAnswer)) {
    error.innerText = 'Error, please enter a number';
    displayGuess.innerText = '...'; //resets display to ...
    return false; //returns false so function that called it does not continue
  } else {
    error.innerText = '';

  };

  return userAnswer;
};



// Generate random number

function generate_number (min, max) {
  if (min !== 0 && max !== 100) {
    min = Math.ceil (min);
    max = Math.floor (max);
    var number = Math.floor (Math.random () * (max - min + 1)) + min;
    return number;
  } else {
    min = 0;
    max = 100;
    var number = Math.floor (Math.random () * 100 + 1);
    return number;
  }
};

//Gets range values, should be called inside the setRange Event Listener

function getRangeValues (range, element) {
  var parsed = parseInt (range.value);
  parsed = get_nums (parsed);
  if (parsed !== false) element.innerText = parsed;
  return range = parsed;

}

//Change range
function changeRange (answer, generatedNum, minRange, maxRange) {
  // debugger
  if (answer !== generatedNum){
    minRange = parseInt(minRange);
    maxRange = parseInt(maxRange);
    return [generatedNum, minRange, maxRange];
  }
  else {
    minRange = parseInt(minRange) - 10;
    maxRange = parseInt(maxRange) + 10;
    min.innerText = minRange;
    max.innerText = maxRange;
    return [generate_number (minRange, maxRange), minRange, maxRange];
  }
}



/// User feedback message

function userFeedback (guess, number, min, max) {
  if (guess < min || guess > max){
     guessHelp.innerText = "Please guess within range";
     displayGuess.innerText = '...';
   }
  else if (guess < number) guessHelp.innerText = 'That is too low';
  else if (guess > number) guessHelp.innerText = 'That is too high';
  else guessHelp.innerText = 'BOOM!!';
}


//Reset Function

function resetFunction () {
  generatedNum = generate_number (defaultMin, defaultMax);
  displayGuess.innerText = '...';
  guessHelp.innerText = 'Take a guess'
  error.innerText = ''
  min.innerText = '0';
  max.innerText = '100';
  clearButton.disabled = true;
  resetButton.disabled = true;
  inputForms.reset ();
  return generatedNum;
}

//Clear forms
function clearForms () {
  minRange.value = '';
  maxRange.value = '';
  userGuess.value = null;
  error.innerText = null;
  min.innerText = '';
  max.innerText = '';

}





/* ------------- Main ---------------- */


// Old School Variables
var counter = 0;
var defaultMin = 0;
var defaultMax = 100;
var generatedNum = generate_number (defaultMin, defaultMax);
var parsedMax, parsedMin;


// Query Selectors
var clearButton = document.querySelector ('#clear')
var displayGuess = document.querySelector ('#display-guess');
var error = document.querySelector ('#error');
var guessButton = document.querySelector ('#guess');
var guessHelp = document.querySelector ('#guess-help')
var inputForms = document.querySelector ('#my-form');
var min = document.querySelector ('#min');
var max = document.querySelector ('#max');
var maxRange = document.querySelector ('#max-range');
var minRange = document.querySelector ('#min-range');
var rangeSet = document.querySelector ('#range-set');
var resetButton = document.querySelector ('#reset');
var userGuess = document.querySelector ('#number');

// States

resetButton.disabled = true;
clearButton.disabled = true;




/* -------- Event listeners and what to do with them -------------- */

// Listen to Guess button to check for user submission

guessButton.addEventListener ('click', function () {
  event.preventDefault ();
  var parsed = parseInt (userGuess.value);
  parsed = get_nums (parsed); //send parse to get checked
  if (parsed !== false) displayGuess.innerText = parsed; //if false is returned dont do anything

  //Compare user answer and display message
  if (minRange.value == '') userFeedback (parsed, generatedNum, defaultMin, defaultMax);
  else {
    userFeedback (parsed, generatedNum, minRange.value, maxRange.value);
    var returnedArr = changeRange (parsed, generatedNum, minRange.value, maxRange.value);
    generatedNum = returnedArr [0];
    minRange.value = returnedArr [1];
    maxRange.value = returnedArr [2];
  };


  resetButton.disabled = false;
});


// Update range based on value entered by user upon clicking Set Range button
rangeSet.addEventListener ('click', function () {
  event.preventDefault ();
  resetButton.disabled = false;
  var parsedMin = parseInt (minRange.value);
  var parsedMax = parseInt (maxRange.value);

  //run thru get_nums to check validity
  parsedMin = get_nums (parsedMin);
  parsedMax = get_nums (parsedMax);
  if (parsedMax == false || parsedMin == false) error.innerText = 'Please set a valid range';
  else {
    //generate a random num within range
    generatedNum = generate_number (parsedMin, parsedMax);
    min.innerText = parsedMin;
    max.innerText = parsedMax;
  }

});




// -----  Button resets -----  ///

clearButton.addEventListener ('click', function () {
  event.preventDefault ();
  clearForms ();
});

resetButton.addEventListener ('click', function () {
  event.preventDefault ();
  resetFunction ();
});


userGuess.addEventListener ('keyup', function () {
  clearButton.disabled = false;
});
minRange.addEventListener ('keyup', function () {
  clearButton.disabled = false;
});
maxRange.addEventListener ('keyup', function () {
  clearButton.disabled = false;
});



//genereate number with guesss button
//take it out of everywhere else


// if guess counter is zerop do above, make number generator function that
// if range provided gives back random in range
//else gives from 0 - 100



// win_modifier to change
