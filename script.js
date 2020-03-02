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
var quizQuestion23 = {question: "JavaScript entities start with _______ and end with _________.", answers:["Semicolon, colon","Semicolon, Ampersand","Ampersand, colon","Ampersand, semicolon"], key:"4"};
var quizQuestion24 = {question: "Which of the following best describes JavaScript?", answers:["a low-level programming language.","a scripting language precompiled in the browser.","a compiled scripting language.","an object-oriented scripting language."], key:"4"};
var quizQuestion25 = {question: "Choose the server-side JavaScript object?", answers:["FileUpLoad","Function","File","Date"], key:"3"};
var quizQuestion26 = {question: "Choose the client-side JavaScript object?", answers:["Database","Cursor","Client","FileUpLoad"], key:"4"};
var quizQuestion27 = {question: "Which of the following is not considered a JavaScript operator?", answers:["new","this","delete","typeof"], key:"2"};
var quizQuestion28 = {question: "______method evaluates a string of JavaScript code in the context of the specified object.", answers:["Eval","ParseInt","ParseFloat","Efloat"], key:"1"};
var quizQuestion29 = {question: "Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?", answers:["onfocus","onblur","onclick","ondblclick"], key:"2"};
var quizQuestion30 = {question: "The syntax of Eval is ________________", answers:["[objectName.]eval(numeriC.","[objectName.]eval(string)","[EvalName.]eval(string)","[EvalName.]eval(numeriC."], key:"2"};
var quizQuestion31 = {question: "JavaScript is interpreted by _________", answers:["Client.","Server","Object","None of the above"], key:"1"};
var quizQuestion32 = {question: "Using _______ statement is how you test for a specific condition.", answers:["Select","If","Switch","For"], key:"1"};
var quizQuestion33 = {question: "Which of the following is the structure of an if statement?", answers:["if (conditional expression is true) then execute this code end if","if (conditional expression is true) execute this code end if","if (conditional expression is true) {then execute this code>->}","if (conditional expression is true) then {execute this code}"], key:"3"};
var quizQuestion34 = {question: "How to create a Date object in JavaScript?", answers:["dateObjectName = new Date([parameters])","dateObjectName.new Date([parameters])","dateObjectName := new Date([parameters])","dateObjectName Date([parameters])"], key:"1"};
var quizQuestion35 = {question: "The _______ method of an Array object adds and/or removes elements from an array.", answers:["Reverse","Shift","Slice","Splice"], key:"4"};
var quizQuestion36 = {question: "To set up the window to capture all Click events, we use which of the following statement?", answers:["window.captureEvents(Event.CLICK);","window.handleEvents(Event.CLICK);","window.routeEvents(Event.CLICK);","window.raiseEvents(Event.CLICK);"], key:"1"};
var quizQuestion37 = {question: "Which tag(s) can handle mouse events in Netscape?", answers:["<IMG>","<A>","<BR>","None of the above"], key:"2"};
var quizQuestion38 = {question: "____________ is the tainted property of a window object.", answers:["Pathname","Protocol","Defaultstatus","Host"], key:"3"};
var quizQuestion39 = {question: "To enable data tainting, the end user sets the _________ environment variable.", answers:["ENABLE_TAINT","MS_ENABLE_TAINT","NS_ENABLE_TAINT","ENABLE_TAINT_NS"], key:"3"};
var quizQuestion40 = {question: "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.", answers:["a wrapper","a link","a cursor","a form"], key:"1"};
var quizQuestion41 = {question: "When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________", answers:["ScriptObject","JSObject","JavaObject","Jobject"], key:"2"};
var quizQuestion42 = {question: "_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.", answers:["ScriptObject","JSObject","JavaObject","Jobject"], key:"2"};
var quizQuestion43 = {question: "_________ is a wrapped Java array, accessed from within JavaScript code.", answers:["JavaArray","JavaClass","JavaObject","JavaPackage"], key:"1"};
var quizQuestion44 = {question: "A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript.", answers:["JavaArray","JavaClass","JavaObject","JavaPackage"], key:"2"};
var quizQuestion45 = {question: "The JavaScript exception is available to the Java code as an instance of __________", answers:["netscape.javascript.JSObject","netscape.javascript.JSException","netscape.plugin.JSException","None of the above"], key:"2"};
var quizQuestion46 = {question: "To automatically open the console when a JavaScript error occurs which of the following is added to prefs.js?", answers:["user_pref(\"javascript.console.open_on_error\", false);","user_pref(\"javascript.console.open_error\", true)","user_pref(\"javascript.console.open_error\", false);","user_pref(\"javascript.console.open_on_error\", true);"], key:"4"};
var quizQuestion47 = {question: "To open a dialog box each time an error occurs, which of the following is added to prefs.js?", answers:["user_pref(\"javascript.classic.error_alerts\", true);\",false);","user_pref(\"javascript.classic.error_alerts\",false);","user_pref(\"javascript.console.open_on_error\", true);","user_pref(\"javascript.console.open_on_error\", false);\",true);"], key:"1"};
var quizQuestion48 = {question: "The syntax of a blur method in a button object is ______________", answers:["Blur()","Blur(contrast)","Blur(value)","Blur(depth)"], key:"1"};
var quizQuestion49 = {question: "The syntax of capture events method for document object is ______________", answers:["captureEvents()","captureEvents(args eventType)","captureEvents(eventType)","captureEvents(eventVal)"], key:"3"};
var quizQuestion50 = {question: "The syntax of close method for document object is ______________", answers:["Close(doC.","Close(object)","Close(val)","Close()"], key:"4"};
var quizQuestion51 = {question: "Which best explains getSelection()?", answers:["Returns the VALUE of a selected OPTION.","Returns document.URL of the window in focus.","Returns the value of cursor-selected text","Returns the VALUE of a checked radio input."], key:"3"};
var quizQuestion52 = {question: "Choose the client-side JavaScript object:", answers:["Database","Cursor","Client","FileUpLoad"], key:"4"};
var quizQuestion53 = {question: "What is mean by \"this\" keyword in javascript?", answers:["It refers current object","It referes previous object","It is variable which contains value","None of the above"], key:"1"};
var allQuestions = {quizQuestion1, quizQuestion2, quizQuestion3, quizQuestion4, quizQuestion5, quizQuestion6, quizQuestion7, quizQuestion8, quizQuestion9, quizQuestion10, quizQuestion11, quizQuestion12, quizQuestion13, quizQuestion14, quizQuestion15, quizQuestion16, quizQuestion17, quizQuestion18, quizQuestion19, quizQuestion20, quizQuestion21, quizQuestion22,
quizQuestion23, quizQuestion24, quizQuestion25, quizQuestion26, quizQuestion27, quizQuestion28, quizQuestion29, quizQuestion30, quizQuestion31, quizQuestion32, quizQuestion33, quizQuestion34, quizQuestion35, quizQuestion36, quizQuestion37, quizQuestion38, quizQuestion39, quizQuestion40, quizQuestion41, quizQuestion42, quizQuestion43, quizQuestion44,  
quizQuestion45, quizQuestion46, quizQuestion47, quizQuestion48, quizQuestion49, quizQuestion50, quizQuestion51, quizQuestion52, quizQuestion53};

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
  var question = 0;
  question = Math.floor(Math.random() * 53);
  
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
    case 23:
        quizQuestionBox.innerText = allQuestions.quizQuestion23.question;
        buttonOne.innerText = allQuestions.quizQuestion23.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion23.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion23.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion23.answers[3];  
        theAnswer = allQuestions.quizQuestion23.key;
        break;    
    case 24:
        quizQuestionBox.innerText = allQuestions.quizQuestion24.question;
        buttonOne.innerText = allQuestions.quizQuestion24.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion24.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion24.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion24.answers[3];  
        theAnswer = allQuestions.quizQuestion24.key;
        break;
    case 25:
        quizQuestionBox.innerText = allQuestions.quizQuestion25.question;
        buttonOne.innerText = allQuestions.quizQuestion25.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion25.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion25.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion25.answers[3];  
        theAnswer = allQuestions.quizQuestion25.key;
        break;    
    case 26:
        quizQuestionBox.innerText = allQuestions.quizQuestion26.question;
        buttonOne.innerText = allQuestions.quizQuestion26.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion26.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion26.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion26.answers[3];  
        theAnswer = allQuestions.quizQuestion26.key;
        break; 
    case 27:
        quizQuestionBox.innerText = allQuestions.quizQuestion27.question;
        buttonOne.innerText = allQuestions.quizQuestion27.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion27.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion27.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion27.answers[3];  
        theAnswer = allQuestions.quizQuestion27.key;
        break;    
    case 28:
        quizQuestionBox.innerText = allQuestions.quizQuestion28.question;
        buttonOne.innerText = allQuestions.quizQuestion28.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion28.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion28.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion28.answers[3];  
        theAnswer = allQuestions.quizQuestion28.key;
        break;
    case 29:
        quizQuestionBox.innerText = allQuestions.quizQuestion29.question;
        buttonOne.innerText = allQuestions.quizQuestion29.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion29.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion29.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion29.answers[3];  
        theAnswer = allQuestions.quizQuestion29.key;
        break;        
    case 30:
        quizQuestionBox.innerText = allQuestions.quizQuestion30.question;
        buttonOne.innerText = allQuestions.quizQuestion30.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion30.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion30.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion30.answers[3];  
        theAnswer = allQuestions.quizQuestion30.key;
        break;     
    case 31:
        quizQuestionBox.innerText = allQuestions.quizQuestion31.question;
        buttonOne.innerText = allQuestions.quizQuestion31.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion31.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion31.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion31.answers[3];  
        theAnswer = allQuestions.quizQuestion31.key;
        break;
    case 32:
        quizQuestionBox.innerText = allQuestions.quizQuestion32.question;
        buttonOne.innerText = allQuestions.quizQuestion32.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion32.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion32.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion32.answers[3];  
        theAnswer = allQuestions.quizQuestion32.key;
        break;     
    case 33:
        quizQuestionBox.innerText = allQuestions.quizQuestion33.question;
        buttonOne.innerText = allQuestions.quizQuestion33.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion33.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion33.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion33.answers[3];  
        theAnswer = allQuestions.quizQuestion33.key;
        break;    
    case 34:
        quizQuestionBox.innerText = allQuestions.quizQuestion34.question;
        buttonOne.innerText = allQuestions.quizQuestion34.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion34.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion34.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion34.answers[3];  
        theAnswer = allQuestions.quizQuestion34.key;
        break;
    case 35:
        quizQuestionBox.innerText = allQuestions.quizQuestion35.question;
        buttonOne.innerText = allQuestions.quizQuestion35.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion35.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion35.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion35.answers[3];  
        theAnswer = allQuestions.quizQuestion35.key;
        break;    
    case 36:
        quizQuestionBox.innerText = allQuestions.quizQuestion36.question;
        buttonOne.innerText = allQuestions.quizQuestion36.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion36.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion36.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion36.answers[3];  
        theAnswer = allQuestions.quizQuestion36.key;
        break; 
    case 37:
        quizQuestionBox.innerText = allQuestions.quizQuestion37.question;
        buttonOne.innerText = allQuestions.quizQuestion37.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion37.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion37.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion37.answers[3];  
        theAnswer = allQuestions.quizQuestion37.key;
        break;    
    case 38:
        quizQuestionBox.innerText = allQuestions.quizQuestion38.question;
        buttonOne.innerText = allQuestions.quizQuestion38.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion38.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion38.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion38.answers[3];  
        theAnswer = allQuestions.quizQuestion38.key;
        break;
    case 39:
        quizQuestionBox.innerText = allQuestions.quizQuestion39.question;
        buttonOne.innerText = allQuestions.quizQuestion39.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion39.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion39.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion39.answers[3];  
        theAnswer = allQuestions.quizQuestion39.key;
        break;        
    case 40:
        quizQuestionBox.innerText = allQuestions.quizQuestion40.question;
        buttonOne.innerText = allQuestions.quizQuestion40.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion40.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion40.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion40.answers[3];  
        theAnswer = allQuestions.quizQuestion40.key;
        break;     
    case 41:
        quizQuestionBox.innerText = allQuestions.quizQuestion41.question;
        buttonOne.innerText = allQuestions.quizQuestion41.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion41.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion41.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion41.answers[3];  
        theAnswer = allQuestions.quizQuestion41.key;
        break;
    case 42:
        quizQuestionBox.innerText = allQuestions.quizQuestion42.question;
        buttonOne.innerText = allQuestions.quizQuestion42.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion42.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion42.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion42.answers[3];  
        theAnswer = allQuestions.quizQuestion42.key;
        break;     
    case 43:
        quizQuestionBox.innerText = allQuestions.quizQuestion43.question;
        buttonOne.innerText = allQuestions.quizQuestion43.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion43.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion43.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion43.answers[3];  
        theAnswer = allQuestions.quizQuestion43.key;
        break;    
    case 44:
        quizQuestionBox.innerText = allQuestions.quizQuestion44.question;
        buttonOne.innerText = allQuestions.quizQuestion44.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion44.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion44.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion44.answers[3];  
        theAnswer = allQuestions.quizQuestion44.key;
        break;
    case 45:
        quizQuestionBox.innerText = allQuestions.quizQuestion45.question;
        buttonOne.innerText = allQuestions.quizQuestion45.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion45.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion45.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion45.answers[3];  
        theAnswer = allQuestions.quizQuestion45.key;
        break;    
    case 46:
        quizQuestionBox.innerText = allQuestions.quizQuestion46.question;
        buttonOne.innerText = allQuestions.quizQuestion46.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion46.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion46.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion46.answers[3];  
        theAnswer = allQuestions.quizQuestion46.key;
        break; 
    case 47:
        quizQuestionBox.innerText = allQuestions.quizQuestion47.question;
        buttonOne.innerText = allQuestions.quizQuestion47.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion47.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion47.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion47.answers[3];  
        theAnswer = allQuestions.quizQuestion47.key;
        break;    
    case 48:
        quizQuestionBox.innerText = allQuestions.quizQuestion48.question;
        buttonOne.innerText = allQuestions.quizQuestion48.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion48.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion48.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion48.answers[3];  
        theAnswer = allQuestions.quizQuestion48.key;
        break;
    case 49:
        quizQuestionBox.innerText = allQuestions.quizQuestion49.question;
        buttonOne.innerText = allQuestions.quizQuestion49.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion49.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion49.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion49.answers[3];  
        theAnswer = allQuestions.quizQuestion49.key;
        break;        
    case 50:
        quizQuestionBox.innerText = allQuestions.quizQuestion50.question;
        buttonOne.innerText = allQuestions.quizQuestion50.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion50.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion50.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion50.answers[3];  
        theAnswer = allQuestions.quizQuestion50.key;
        break;     
    case 51:
        quizQuestionBox.innerText = allQuestions.quizQuestion51.question;
        buttonOne.innerText = allQuestions.quizQuestion51.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion51.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion51.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion51.answers[3];  
        theAnswer = allQuestions.quizQuestion51.key;
        break;
    case 52:
        quizQuestionBox.innerText = allQuestions.quizQuestion52.question;
        buttonOne.innerText = allQuestions.quizQuestion52.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion52.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion52.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion52.answers[3];  
        theAnswer = allQuestions.quizQuestion52.key;
        break;     
    case 53:
        quizQuestionBox.innerText = allQuestions.quizQuestion53.question;
        buttonOne.innerText = allQuestions.quizQuestion53.answers[0];
        buttonTwo.innerText = allQuestions.quizQuestion53.answers[1];
        buttonThree.innerText = allQuestions.quizQuestion53.answers[2];
        buttonFour.innerText = allQuestions.quizQuestion53.answers[3];  
        theAnswer = allQuestions.quizQuestion53.key;
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
