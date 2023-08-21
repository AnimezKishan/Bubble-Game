//This section is assigned to create const varaibles and varibales
const startGame = document.getElementById("startGame");
const resetGame = document.getElementById("resetGame");
const scoreVal = document.getElementById("scoreVal");
const hitVal = document.getElementById("hitVal");
var timer = 60;
var hitrn = 0;
var score = 0;
let resetTimer = 10;
//end variable section
resetGame.disabled = true;
//To generate bubbles
function makeBubble() {
var timeInterval = 0;

function makeBubble(){
  var clutter = "";

  for (var i = 0; i < 147; i++) {
    clutter += `<div class="bubble">${Math.floor(
      Math.random() * 10 + 1
    )}</div>`;
    document.getElementById("pBottom").innerHTML = clutter;
  }
}

function runTimmer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        "#pBottom"
      ).innerHTML = `<h1>Game Over!</h1><h2>You Scored ${score} Points.</h2>`;
var timer = 60;
function runTimmer()
{
  clearInterval(timeInterval);
   timerInterval = setInterval(function(){
    if(timer > 0){
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    }
    else{
      clearInterval(timerInterval);
      document.querySelector("#pBottom").innerHTML =
      `<h1>Game Over!</h1><h2>You Scored ${score} Points.</h2>`;
      timer = 60;
      score = 0;
      startGame.disabled = false;
      resetGame.disabled = true;
      scoreVal.textContent = `${score}`;
      hitVal.textContent = "";
    }
  }, 1000);
  timeGivenToClickBubble();
}

function setNewHit() {
  hitrn = Math.floor(Math.random() * 10 + 1);
  document.querySelector("#hitVal").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
//this functions increase the timer by given seconds
const increaseTimer = (timerAmount) => {
  if (timer + timerAmount > 60) {
    timer = 60;
  } else {
    timer += timerAmount;
  }
};

//this function will decrease the timer by given seconds
const decreaseTimer = (timerAmount) => {
  if (timer - timerAmount < 0) {
    timer = 0;
  } else {
    timer -= timerAmount;
  }
};

/*this the time given to the player to click on the bubble.
 if the player fails to do so the hit will change,
bubble will chnage and the time will be reset to defautlt.
*/

/*
this function below is responsible for the mximum time given to player to click on the bubble.
*/
const timeGivenToClickBubble = () => {
  let time = setInterval(() => {
    resetTimer--;
    if (timer === 0) {
      clearInterval(time);
      resetTimerdefault();
    }
    if (resetTimer == 0) {
      clearInterval(time);
      timeGivenToClickBubble();
      setNewHit();
      resetTimerdefault();
      makeBubble();
    }
  }, 1000);
};

//this will reset the resettimer variable.
const resetTimerdefault = () => {
  resetTimer = 10;
};

document.querySelector("#startGame").addEventListener("click", function () {
  runTimmer();
  makeBubble();
  setNewHit();

  startGame.disabled = true;
  resetGame.disabled = false;

  document
    .querySelector("#pBottom")
    .addEventListener("click", function (details) {
      var clicked = Number(details.target.textContent);
      if (clicked == hitrn) {
        setNewHit();
        makeBubble();
        increaseScore();
        increaseTimer(5); //this function will add 5s extra on each correct click
        resetTimerdefault(); //this function will reset the time given to the player to click the bubble to default.
      } else {
        //this is triggered on wrong click.
        setNewHit();
        makeBubble();
        decreaseTimer(5); //this function will minus 5s on each wrong click
        resetTimerdefault(); //this function will reset the time given to the player to click the bubble to default.
      }
    });
});

document.querySelector("#resetGame").addEventListener("click", function () {
  location.reload();
document.querySelector("#startGame").addEventListener("click", function () {
  var startButton = document.querySelector("#startGame");

  if (startButton.textContent === "Start Game") {
    runTimmer();
    makeBubble();
    setNewHit();

    startButton.textContent = "Reset Game";
  } else {
    clearInterval(timerInterval);
    document.querySelector("#pBottom").innerHTML = "";
    document.querySelector("#timerVal").textContent = "60";
    document.querySelector("#scoreVal").textContent = "0";
    document.querySelector("#hitVal").textContent = "0";
    score = 0;
    hitrn = 0;

    runTimmer();
    makeBubble();
    setNewHit();
  }
});

document.querySelector("#pBottom").addEventListener("click", function (details) {
  var clicked = Number(details.target.textContent);
  if (clicked === hitrn) {
    setNewHit();
    makeBubble();
    increaseScore();
  }
});
