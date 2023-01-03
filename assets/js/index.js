var gameTimer = document.querySelector(".timer");
var startButton = document.querySelector("#startButton");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");
var gameWord = document.querySelector(".gameWord");
var timeRemaining;
var timerInterval;
var questions =["dog"];

function countdown() {
    clearInterval(timerInterval);
    timeRemaining = 30;
    timerInterval = setInterval(function(){
        timeRemaining--;
   
        gameTimer.textContent = timeRemaining;

        if (timeRemaining === 0){
            clearInterval(timerInterval);
        }
     }, 1000 * 1);
}

 

function loadWord(){
    for (var i=0; i<questions.length; i++){
    gameWord.append(questions[0]);
    }
    
}

startButton.addEventListener("click", countdown);
startButton.addEventListener("click", loadWord);