var gameTimer = document.querySelector(".timer");
var startButton = document.querySelector("#startButton");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");
var gameWord = document.querySelector(".gameWord");
var timeRemaining;
var timerInterval;
var questions =["dog", "cat"];

function countdown() {
    clearInterval(timerInterval);
    timeRemaining = 2;
    timerInterval = setInterval(function(){
        timeRemaining--;
   
        gameTimer.textContent = "Seconds Left: " + timeRemaining;

        if (timeRemaining === 0){
            clearInterval(timerInterval);
            startButton.style.visibility = "visible";
        }
     }, 1000 * 1);
}

 

// function loadWord(){
//     if (countdown) {
//     startButton.style.visibility = "hidden";
//     gameWord.append(questions[1]);
//     }, 1000 *1; 
    
// }

function loadWord() {
    clearWord();
    clearInterval(getWord);
    var randomWord = questions[Math.floor(Math.random()*questions.length)];
    var getWord = setInterval(function() {
    $(".gameWord").append(randomWord);
        }, 1000 *1)

    // gameWord.style.visibility = "hidden";

    setTimeout(function() {
        clearInterval(getWord)
    }, 1000 *1);
}

function clearWord() {
    $(".gameWord").empty();
}

console.log(questions);
console.log(questions[1]);

startButton.addEventListener("click", countdown);
startButton.addEventListener("click", loadWord);
