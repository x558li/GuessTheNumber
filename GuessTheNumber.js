//Selectors 
var hintMessageDisplay = document.querySelector("#hintMessage");
var numOfChances = document.getElementById("numOfChances");
var relation = document.getElementById("relation");
var input = document.getElementById("userInput");
var guessButton = document.querySelector("#guessButton");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
var answerButton = document.getElementById("answerButton");

//Useful variables
var user = -1;
var totalAttempt = 5;
var attemptLeft = totalAttempt;
var answer = pickInt();

//Actions 
guessButton.addEventListener("click", function(){
    user = Number(input.value);
    if (user != "" && user <= 20 && user >= 1){
        --attemptLeft;
        numOfChances.textContent = attemptLeft;
        hintMessageDisplay.style.color = "black"

        if (attemptLeft == 0) {
            hintMessageDisplay.textContent = "You LOSE!";
            hintMessageDisplay.classList.toggle("blinkText")
            resetButton.textContent = "Try Again";
            input.value = "Ans: " + answer;
            input.disabled = true;
        }
        else {
            resetButton.textContent = "Start Again";
            if(answer == user){
            hintMessageDisplay.textContent = "You WIN!";
            hintMessageDisplay.classList.toggle("blinkText")
            resetButton.textContent = "New Game";
            input.disabled = true;
            }
            else if (user < answer) {
                hintMessageDisplay.textContent = "Try a Higher Number";
            }
            else if (user > answer) {
                hintMessageDisplay.textContent = "Try a Lower Number";
            }
        }
    }
    else {
        hintMessageDisplay.textContent = "Enter Integer Within 1-20";
        hintMessageDisplay.style.color = "red";
    }
    
 	
 });

resetButton.addEventListener("click", function(){
    if (answer == user || attemptLeft == 0) {
        hintMessageDisplay.classList.remove("blinkText");
    }
    resetGame();    
});

easyButton.addEventListener("click", function(){
    totalAttempt = 5;
    this.classList.toggle("selected");
    hardButton.classList.remove("selected");
    numOfChances.textContent = totalAttempt;
    resetGame();
    resetButton.textContent = "New Game";
});

hardButton.addEventListener("click", function(){
    totalAttempt = 3;
    this.classList.toggle("selected");
    easyButton.classList.remove("selected");
    numOfChances.textContent = totalAttempt;
    resetGame();
    resetButton.textContent = "New Game";
});

answerButton.addEventListener("mouseover", function(){
    this.textContent = answer;
})

answerButton.addEventListener("mouseout", function(){
    this.textContent = "Check The Answer";
})

//Functions 
function pickInt() {
    var answer = Math.floor(Math.random() * 20);
    console.log("ANS:"+answer);
    return answer;
}

function resetGame() {
    attemptLeft = totalAttempt;
    numOfChances.textContent = attemptLeft;
    hintMessageDisplay.textContent = "Let's have fun!";
    hintMessageDisplay.style.color = "black"
    input.value = "";
    input.disabled = false;
    answer = pickInt();

}

