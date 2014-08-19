console.log('data is g');

var score;
var $updateScore = function (x) {
  xString = Math.round(x).toString();
  $('#message').children('span').text("You have " + xString + " life remaining.");
}

//Sets the starting time when the game is opened.
var startTime = Number(simpleStorage.get('startTime'));
console.log(startTime);
//funciton to calculate time elapsed
var elapsed = function (x) {
  var current = new Date();
  var y = current.getTime() - x;
  return y;
};

//Recursive function to calculate life
function Tick() {
    if (true)
    {
      score = 1000000 - elapsed(startTime)
      $updateScore(score);
      setTimeout("Tick()", 10);
    }
    else
    {
      totalScore = score;
    }
}

$(document).ready(function() {
  console.log('data ready');

});
