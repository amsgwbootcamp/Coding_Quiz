/* HTML elements variables    */
var highScore = document.querySelector("#highscore-list");
var backButton = document.querySelector("#back-button");
var clearButton = document.querySelector("#clear-button");

// items needed for LocalStorage

// items needed for LocalStorage
var displayName;
var displayScore;
var highScores = {
  Name: displayName,
  Score: displayScore
};

listScores();

function listScores() {
  // Clear todoList element and update todoCountSpan
 
  /* highScore.innerHTML = "";
  highScore.textContent = highScores.length;   */
  /*var highScore = JSON.parse(localStorage.getItem("nameScore"));  */

  // Render a new li for each todo
  
    var displayName = localStorage.getItem("Name");
    var displayScore = localStorage.getItem("Score");
    if (displayName != null && displayScore != null)
    { 
        var li = document.createElement("li");
        li.innerHTML = displayName + " " + displayScore;
        highScore.setAttribute("id", "li")
        highScore.appendChild(li);
    }
  
} 

backButton.addEventListener("click", function()
{
  location.href = "index.html";
});

clearButton.addEventListener("click", function()
{
  localStorage.clear();
  var li = document.getElementById("li"); 
  highScore.parentNode.removeChild(li);
});
