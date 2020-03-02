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
var quizQuestion11 = {question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.", answers:["<SCRIPT>","<BODY>","<HEAD>","<TITLE>"], key:"1"};
var quizQuestion12 = {question: "How does JavaScript store dates in a date object?", answers:["The number of milliseconds since January 1st, 1970","The number of days since January 1st, 1900","The number of seconds since Netscape's public stock offering.","None of the above"], key:"1"};
var quizQuestion13 = {question: "Which of the following attribute can hold the JavaScript version?", answers:["LANGUAGE","SCRIPT","VERSION","None of the above"], key:"1"};
var quizQuestion14 = {question: "What is the correct JavaScript syntax to write \"Hello World\"?", answers:["System.out.println(\"Hello World\")","println (\"Hello World\")","document.write(\"Hello World\")","response.write(\"Hello World\")"], key:"3"};
var quizQuestion15 = {question: "Which of the following way can be used to indicate the LANGUAGE attribute?", answers:["<LANGUAGE=\"JavaScriptVersion\">","<SCRIPT LANGUAGE=\"JavaScriptVersion\">","<SCRIPT LANGUAGE=\"JavaScriptVersion\">JavaScript statements…</SCRIPT>","<SCRIPT LANGUAGE=\"JavaScriptVersion\"!>JavaScript statements…</SCRIPT>"], key:"3"};
var quizQuestion16 = {question: "Inside which HTML element do we put the JavaScript?", answers:["<js>","<scripting>","<script>","<javascript>"], key:"3"};
var quizQuestion17 = {question: "What is the correct syntax for referring to an external script called \"abc.js\"?", answers:["<script href=\"abc.js\">","<script name=\"abc.js\">","<script src=\"abc.js\">","None of the above"], key:"3"};
var quizQuestion18 = {question: "Which types of image maps can be used with JavaScript?", answers:["Server-side image maps","Client-side image maps"," Server-side image maps and Client-side image maps","None of the above"], key:"2"};
var quizQuestion19 = {question: "Which of the following navigator object properties is the same in both   Netscape and IE?", answers:["navigator.appCodeName","navigator.appName","navigator.appVersion","None of the above"], key:"1"};
var quizQuestion20 = {question: "Which is the correct way to write a JavaScript array?", answers:["var txt = new Array(1:\"tim\",2:\"kim\",3:\"jim\")","var txt = new Array:1=(\"tim\")2=(\"kim\")3=(\"jim\")","var txt = new Array(\"tim\",\"kim\",\"jim\")","var txt = new Array=\"tim\",\"kim\",\"jim\""], key:"3"};
var quizQuestion21 = {question: "What does the <noscript> tag do?", answers:["Enclose text to be displayed by non-JavaScript browsers.","Prevents scripts on the page from executing.","Describes certain low-budget movies.","None of the above"], key:"1"};
var quizQuestion22 = {question: "If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?", answers:["\"New Text\"?","para1.value=\"New Text\";","para1.firstChild.nodeValue= \"New Text\";","para1.nodeValue=\"New Text\";"], key:"2"};
var allQuestions = {quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4, quizQuestion5, quizQuestion6, quizQuestion7, quizQuestion8, quizQuestion9, quizQuestion10, quizQuestion11, quizQuestion12, quizQuestion13, quizQuestion14, quizQuestion15, quizQuestion16, quizQuestion17, quizQuestion18, quizQuestion19, quizQuestion20, quizQuestion21, quizQuestion22};

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
  localStorage.clear();
  var question = 0;
  question = Math.floor(Math.random() * 22);
  
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
    case 11:
        quizQuestionBox.innerText = allQuestions.quizQuestion11.question;
        buttonOne.innerText = allQuestions.quizQuestion11.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion11.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion11.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion11.answers[3];  
        theAnswer = allQuestions.quizQuestion11.key;
        break;      
    case 12:
        quizQuestionBox.innerText = allQuestions.quizQuestion12.question;
        buttonOne.innerText = allQuestions.quizQuestion12.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion12.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion12.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion12.answers[3];  
        theAnswer = allQuestions.quizQuestion12.key;
        break;   
    case 13:
        quizQuestionBox.innerText = allQuestions.quizQuestion13.question;
        buttonOne.innerText = allQuestions.quizQuestion13.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion13.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion13.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion13.answers[3];  
        theAnswer = allQuestions.quizQuestion13.key;
        break;     
    case 14:
        quizQuestionBox.innerText = allQuestions.quizQuestion14.question;
        buttonOne.innerText = allQuestions.quizQuestion14.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion14.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion14.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion14.answers[3];  
        theAnswer = allQuestions.quizQuestion14.key;
        break;  
    case 15:
        quizQuestionBox.innerText = allQuestions.quizQuestion15.question;
        buttonOne.innerText = allQuestions.quizQuestion15.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion15.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion15.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion15.answers[3];  
        theAnswer = allQuestions.quizQuestion15.key;
        break;     
    case 16:
        quizQuestionBox.innerText = allQuestions.quizQuestion16.question;
        buttonOne.innerText = allQuestions.quizQuestion16.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion16.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion16.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion16.answers[3];  
        theAnswer = allQuestions.quizQuestion16.key;
        break;   
    case 17:
        quizQuestionBox.innerText = allQuestions.quizQuestion17.question;
        buttonOne.innerText = allQuestions.quizQuestion17.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion17.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion17.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion17.answers[3];  
        theAnswer = allQuestions.quizQuestion17.key;
        break;     
    case 18:
        quizQuestionBox.innerText = allQuestions.quizQuestion18.question;
        buttonOne.innerText = allQuestions.quizQuestion18.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion18.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion18.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion18.answers[3];  
        theAnswer = allQuestions.quizQuestion18.key;
        break;     
    case 19:
        quizQuestionBox.innerText = allQuestions.quizQuestion19.question;
        buttonOne.innerText = allQuestions.quizQuestion19.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion19.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion19.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion19.answers[3];  
        theAnswer = allQuestions.quizQuestion19.key;
        break;     
    case 20:
        quizQuestionBox.innerText = allQuestions.quizQuestion20.question;
        buttonOne.innerText = allQuestions.quizQuestion20.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion20.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion20.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion20.answers[3];  
        theAnswer = allQuestions.quizQuestion20.key;
        break;     
    case 21:
        quizQuestionBox.innerText = allQuestions.quizQuestion21.question;
        buttonOne.innerText = allQuestions.quizQuestion21.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion21.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion21.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion21.answers[3];  
        theAnswer = allQuestions.quizQuestion21.key;
        break;
    case 22:
        quizQuestionBox.innerText = allQuestions.quizQuestion22.question;
        buttonOne.innerText = allQuestions.quizQuestion22.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion22.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion22.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion22.answers[3];  
        theAnswer = allQuestions.quizQuestion22.key;
        break;       
    }
    rightOrWrong.innerText = "";
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
    finalScore = correctCounter * 5;
    userName = prompt("You got " + correctCounter + " questions correct." + "\n" + "Please enter your initials or name so your score can be recorded." + "\n" + "Only the top 5 scores will be displayed.");
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
