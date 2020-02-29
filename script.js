var secondsDisplay = document.querySelector("#seconds");
var buttonOne = document.querySelector("#button-1");
var buttonTwo = document.querySelector("#button-2");
var buttonThree = document.querySelector("#button-3");
var buttonFour = document.querySelector("#button-4");
var e = 0;


var totalSeconds = 0;
var secondsElapsed = 0;
var totalSeconds = secondsDisplay.textContent;
var interval;

/* One thing to distinguish here is that not all functions are created equal.
   Some functions just change settings, some functions just call other functions,
   some functions just format strings or numbers, etc. */

//this launches the app by calling setTime() and renderTime()
getTimePreferences();
startTimer();


function getFormattedSeconds() 
{
  var formattedSeconds;
  var secondsLeft = totalSeconds - secondsElapsed;

  if (secondsLeft < 10) 
  {
    formattedSeconds = "0" + secondsLeft;
  } 
  else 
  {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}

/* This function just retrieves the values from the html input elements; Sort of 
   getting run in the background, it sets the totalSeconds variable which
   is used in getFormattedMinutes/Seconds() and the renderTime() function. 
   It essentially resets our timer */
function setTime() 
{
  clearInterval(interval);
} 

//This function does 2 things. displays the time and checks to see if time is up.
function renderTime() 
{
  // When renderTime is called it sets the textContent for the timer html...
    secondsDisplay.textContent = getFormattedSeconds();

 // ..and then checks to see if the time has run out
    if (secondsElapsed >= totalSeconds) 
    {
    stopTimer();
    }
}

// This function is where the "time" aspect of the timer runs
// Notice no settings are changed other than to increment the secondsElapsed variable
function startTimer()  
{
  setTime();

  // we only want to start the timer if minutes is > 0
  if (totalSeconds > 0) 
  {    
    /* the "interval" variable here using "setInterval()" begins the recurring increment of the 
       secondsElapsed variable which is used to check if the time is up */
      interval = setInterval(function() 
      {
        secondsElapsed++;
        //So renderTime() is called here once every second.
        renderTime();
      }, 1000);
  } 
}

/* This function stops the interval and also resets secondsElapsed 
   and calls "setTime()" which effectively reset the timer 
   to the input selections workMinutesInput.value and restMinutesInput.value */
function stopTimer() 
{
  secondsElapsed = 0;
  setTime(); 
  renderTime();  
  finalProcessing();
}

function getTimePreferences() {
/* This is where the app is really kicked-off, setTime and renderTime are the two main routines.  */
  setTime();
  renderTime();
}

function finalProcessing() {
  /* This is where the app is really kicked-off, setTime and renderTime are the two main routines.  */
    alert("Time is up!!!!!");
    secondsDisplay.textContent = "0";
  }

function checkButtonClicked(e)
{
  if (e === 1)
  {
    alert("Button 1 has been clicked");
  } 
  else if (e === 2)
  {
    alert("Button 2 has been clicked");
  }
  else if (e === 3)
  {
    alert("Button 3 has been clicked");
  }
  else 
  {
    alert("Button 4 has been clicked");
  }
}  

buttonOne.addEventListener("click", function()
{
  var e = 1;
  checkButtonClicked(e);
});

buttonTwo.addEventListener("click", function()
{
  var e = 2;
  checkButtonClicked(e);
});

buttonThree.addEventListener("click", function()
{
  var e = 3;
  checkButtonClicked(e);
});

buttonFour.addEventListener("click", function()
{
  var e = 4;
  checkButtonClicked(e);
});

