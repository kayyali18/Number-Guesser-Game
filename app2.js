
/*          Functions         */

//Get user min and max for number generator

function get_nums (userAnswer) {
  if (userAnswer === null || isNaN (userAnswer)) {
    error.textContent = 'Error, please enter a number';
  } else {
    
  };

  return userAnswer;
};

// function to test user entry
function testGuess () {
  event.preventDefault ();
  var parsed = parseInt (numberEntered.value);
  get_nums (parsed);

}

// generate random number based off of min and max entered by user

function generate_number (min, max, number) {
  min = Math.ceil (min);
  max = Math.floor (max);
  number = Math.floor (Math.random () * (max - min + 1)) + min;
  return number;
};



/* ------ Main ---------- */


var number = 0;
//input what is the max or min you want

  //Get min and max
  // min_range = parseInt (prompt('Enter the minimum number to be used:'), 10);
  // min_range = get_nums (min_range);
  // max_range = parseInt (prompt('Enter the max number:'), 10);
  // max_range = get_nums (max_range);
  //
  // //generate the random num
  // number = generate_number (min_range, max_range);
  // console.log (number);

  //return min max and the random num


// problem, everything is parsing to int, can't check for string. (fixed);
// used radix to fix everytihng being a string but still not catchning NaN (fixed)
// used isNaN to fix problem in while loop instead of checking typeof
// variables are undefined outside of function (fixed);

// generate number after getting user input






  //if round win
    //increase MAX
    // decrease MIN

    //display changes to user

// let user guess

var max_range = document.querySelector ('#max_range');
var min_range = document.querySelector ('#min_range');
var userGuess = document.querySelector ('#number');
var guessButton = document.querySelector ('#submit');
var error = document.querySelector ('#error');

guessButton.addEventListener ('click', testGuess);



// if user guess is NaN OR out of range
  // ERROR


// clear and reset button not available

  //clear fields

//   function ClearField () {
//     document.getElementbyId ('textfield').value = '';
//   };
//
//   //and then call this on a button on HTML
//   //if input == empty or user guess == 0
//
//
//
// //display result
//   console.log (result);
//   //if high
//   if (result > number) console.log 'too high';
//   //if low
//   else if (result < number) console.log 'too low';
//   //else
//   else console.log 'BOOM!';
//
//
//   // generate a random number between 0 - 100
//   Math.floor(Math.random() * 100);



//EXTRA

  //make it two player
  // maybe object or class


  //scores to keep

    //timer at 15 sec
    // for every sec lost
    // deduct from MAX 105 points - 10 points
    // add scores to user


  //make it a game for kids
