//To generate bubbles
var timeInterval = 0;

function makeBubble(){
  var clutter = "";

  for(var i=0;i<147;i++)
  {
    clutter += `<div class="bubble">${Math.floor((Math.random() * 10) + 1)}</div>`;
    document.getElementById("pBottom").innerHTML = clutter;
  }
}

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
    }
  }, 1000);
}

var hitrn = 0;
function setNewHit(){
  hitrn = Math.floor((Math.random() * 10) + 1);
  document.querySelector("#hitVal").textContent = hitrn;
}

var score = 0;
function increaseScore(){
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

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
