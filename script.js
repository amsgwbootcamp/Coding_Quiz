/* HTML elements variables    */
var secondsDisplay = document.querySelector("#seconds");
var buttonOne = document.querySelector("#button-1");
var buttonTwo = document.querySelector("#button-2");
var buttonThree = document.querySelector("#button-3");
var buttonFour = document.querySelector("#button-4");
var quizQuestionBox = document.querySelector("#quiz-question");
var rightOrWrong = document.querySelector("#result");
var nextButton = document.querySelector("#next-button");
var backButton = document.querySelector("#back-button");
var userName = "";
var highScore = document.querySelector("#highscore-list");
var questionCounter = 1;

// items needed for LocalStorage
var displayName;
var displayScore;
var highScores = {
  Name: displayName,
  Score: displayScore
};

// items needed for script
var theAnswer = "";
var correctCounter = 0;
var finalScore = 0;
var notFinished = true;

// Quiz questions
var quizQuestion1 = {question: "Why does Javascript and Java have simlar names?", answers:["Javascript is a stripped-down version of Java","JavaScript's syntax is loosely based on Java's","They both originated on the island of Java","None of the above"], key:"2"};
var quizQuestion2 = {question: "When a user views a page containing a Javascript program, which machine actually executes the script?", answers:["The User's machine running a Web browswer","The Web Server","A central machine deep within Netscape's corporate offices","None of the above"], key:"1"};
var quizQuestion3 = {question: " ______ JavaScript is also called client-side JavaScript.", answers:["Microsoft","Navigator","LiveWire","Native"], key:"2"};
var quizQuestion4 = {question: "__________ JavaScript is also called server-side JavaScript.", answers:["Microsoft","Navigator","LiveWire","Native"], key:"3"};
var quizQuestion5 = {question: "What are variables used for in JavaScript Programs?", answers:["Storing numbers, dates, or other values","Varying randomly","Causing high-school algebra flashbacks","None of the above"], key:"1"};
var quizQuestion6 = {question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.", answers:["Client-side","Server-side","Local","Native"], key:"1"};
var quizQuestion7 = {question: "What should appear at the very end of your JavaScript? If you have the following in your script: The <script LANGUAGE=\"JavaScript\">tag", answers:["The </script>","The <script>","The END statement","None of the above"], key:"1"};
var quizQuestion8 = {question: "Which of the following can't be done with client-side JavaScript?", answers:["Validating a form","Sending a form's contents by email","Storing the form's contents to a database file on the server","None of the above"], key:"3"};
var quizQuestion9 = {question: "Which of the following are capabilities of functions in JavaScript?", answers:["Return a value","Accept parameters and Return a value","Accept parameters","None of the above"], key:"2"};
var quizQuestion10 = {question: "Which of the following is not a valid JavaScript variable name?", answers:["2names"," _first_and_last_names","FirstAndLast","None of the above"], key:"1"};
var allQuestions = {quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4, quizQuestion5, quizQuestion6, quizQuestion7, quizQuestion8, quizQuestion9, quizQuestion10};
            
/* Timer variables    */
var secondsElapsed = 0;
var secondsLeft = 0;
var totalSeconds = secondsDisplay.textContent;
var interval;




/* One thing to distinguish here is that not all functions are created equal.
   Some functions just change settings, some functions just call other functions,
   some functions just format strings or numbers, etc. */

//this launches the app by calling setTime() and renderTime()

loadQuizQuestions();
getTimePreferences();
startTimer();


function loadQuizQuestions()
{
  // alert("Question Counter is: " + questionCounter);
  if (questionCounter <= 10)
  {
      question = questionCounter; 
      switch(question) 
      {
        case 1:
            quizQuestionBox.innerText = allQuestions.quizQuestion1.question;
            buttonOne.innerText = allQuestions.quizQuestion1.answers[0];
            buttonTwo.innerText = allQuestions.quizQuestion1.answers[1];
            buttonThree.innerText = allQuestions.quizQuestion1.answers[2];
            buttonFour.innerText = allQuestions.quizQuestion1.answers[3];  
            theAnswer = allQuestions.quizQuestion1.key;
            break;
        case 2:
            quizQuestionBox.innerText = allQuestions.quizQuestion2.question;
            buttonOne.innerText = allQuestions.quizQuestion2.answers[0];
            buttonTwo.innerText = allQuestions.quizQuestion2.answers[1];
            buttonThree.innerText = allQuestions.quizQuestion2.answers[2];
            buttonFour.innerText = allQuestions.quizQuestion2.answers[3];  
            theAnswer = allQuestions.quizQuestion2.key;
            break;
        case 3:
            quizQuestionBox.innerText = allQuestions.quizQuestion3.question;
            buttonOne.innerText = allQuestions.quizQuestion3.answers[0];
            buttonTwo.innerText = allQuestions.quizQuestion3.answers[1];
            buttonThree.innerText = allQuestions.quizQuestion3.answers[2];
            buttonFour.innerText = allQuestions.quizQuestion3.answers[3];  
            theAnswer = allQuestions.quizQuestion3.key;
            break; 
        case 4:
            quizQuestionBox.innerText = allQuestions.quizQuestion4.question;
            buttonOne.innerText = allQuestions.quizQuestion4.answers[0];
            buttonTwo.innerText = allQuestions.quizQuestion4.answers[1];
            buttonThree.innerText = allQuestions.quizQuestion4.answers[2];
            buttonFour.innerText = allQuestions.quizQuestion4.answers[3];  
            theAnswer = allQuestions.quizQuestion4.key;
            break;  
        case 5:
            quizQuestionBox.innerText = allQuestions.quizQuestion5.question;
            buttonOne.innerText = allQuestions.quizQuestion5.answers[0];
            buttonTwo.innerText = allQuestions.quizQuestion5.answers[1];
            buttonThree.innerText = allQuestions.quizQuestion5.answers[2];
            buttonFour.innerText = allQuestions.quizQuestion5.answers[3];  
            theAnswer = allQuestions.quizQuestion5.key;
            break;  
        case 6:
            quizQuestionBox.innerText = allQuestions.quizQuestion6.question;
            buttonOne.innerText = allQuestions.quizQuestion6.answers[0];
            buttonTwo.innerText = allQuestions.quizQuestion6.answers[1];
            buttonThree.innerText = allQuestions.quizQuestion6.answers[2];
            buttonFour.innerText = allQuestions.quizQuestion6.answers[3];  
            theAnswer = allQuestions.quizQuestion6.key;
            break;   
        case 7:
            quizQuestionBox.innerText = allQuestions.quizQuestion7.question;
            buttonOne.innerText = allQuestions.quizQuestion7.answers[0];
            buttonTwo.innerText = allQuestions.quizQuestion7.answers[1];
            buttonThree.innerText = allQuestions.quizQuestion7.answers[2];
            buttonFour.innerText = allQuestions.quizQuestion7.answers[3];  
            theAnswer = allQuestions.quizQuestion7.key;
            break;
        case 8:
            quizQuestionBox.innerText = allQuestions.quizQuestion8.question;
            buttonOne.innerText = allQuestions.quizQuestion8.answers[0];
            buttonTwo.innerText = allQuestions.quizQuestion8.answers[1];
            buttonThree.innerText = allQuestions.quizQuestion8.answers[2];
            buttonFour.innerText = allQuestions.quizQuestion8.answers[3];  
            theAnswer = allQuestions.quizQuestion8.key;
            break;      
        case 9:
            quizQuestionBox.innerText = allQuestions.quizQuestion9.question;
            buttonOne.innerText = allQuestions.quizQuestion9.answers[0];
            buttonTwo.innerText = allQuestions.quizQuestion9.answers[1];
            buttonThree.innerText = allQuestions.quizQuestion9.answers[2];
            buttonFour.innerText = allQuestions.quizQuestion9.answers[3];  
            theAnswer = allQuestions.quizQuestion9.key;
            break;      
        case 10:
            quizQuestionBox.innerText = allQuestions.quizQuestion10.question;
            buttonOne.innerText = allQuestions.quizQuestion10.answers[0];
            buttonTwo.innerText = allQuestions.quizQuestion10.answers[1];
            buttonThree.innerText = allQuestions.quizQuestion10.answers[2];
            buttonFour.innerText = allQuestions.quizQuestion10.answers[3];  
            theAnswer = allQuestions.quizQuestion10.key;
            break;      
      } 
      questionCounter = questionCounter + 1;
      rightOrWrong.innerText = "";
    }
    else {
       finalProcessing();     
    }
}

function getFormattedSeconds()  
{
  var formattedSeconds;
  secondsLeft = totalSeconds - secondsElapsed;

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
  notFinished = false;
  finalProcessing();
  }

function getTimePreferences() {
/* This is where the app is really kicked-off, setTime and renderTime are the two main routines.  */
  setTime();
  renderTime();
}

function finalProcessing() {
  /* This is where the user can enter their score.    */
    secondsDisplay.textContent = "0";  
    if (questionCounter != 10)
    {
      checkButtonClicked();
    }
    finalScore = correctCounter * 10;
    userName = prompt("You got " + correctCounter + " questions correct." + "\n" + "Please enter your initials or name so your score can be recorded." + "\n" + "Your score will be displayed on the View Scores Page.");
    displayName = userName;
    displayScore = finalScore;
    localStorage.setItem("Name", displayName);
    localStorage.setItem("Score", displayScore); 
    location.href = "index.html";
}    

function checkButtonClicked(e)
{
  if (e === theAnswer)
  {
    rightOrWrong.innerText = "Right";
    correctCounter = correctCounter + 1;
  }
  else
  {
    rightOrWrong.innerText = "Wrong";
    secondsElapsed = secondsElapsed + 5;
    renderTime();
  }
}  

buttonOne.addEventListener("click", function()
{
  var e = "1";
  checkButtonClicked(e);
});

buttonTwo.addEventListener("click", function()
{
  var e = "2";
  checkButtonClicked(e);
});

buttonThree.addEventListener("click", function()
{
  var e = "3";
  checkButtonClicked(e);
});

buttonFour.addEventListener("click", function()
{
  var e = "4";
  checkButtonClicked(e);
});

nextButton.addEventListener("click", function()
{
  if (notFinished)
  {
    loadQuizQuestions();
  }
});

backButton.addEventListener("click", function()
{
  location.href = "index.html";
});
