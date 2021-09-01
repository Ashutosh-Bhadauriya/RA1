var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Ashutosh",
    score: 4,
  },
  {
    name: "Viki",
    score: 2,
  }  
]

var questions = [{
  question: "My favorite cricketer? ",
  answer: "Sachin Tendulkar"
}, {
  question: "Favourite Indian State? ",
  answer: "Himachal Pradesh"
},
{
  question: "Who am I to you? ",
  answer: "Friend"
},
{
  question: "My favorite TV Series? ",
  answer: "Teen Wolf"
}
];

function welcome() {
 var userName = readlineSync.question("Please enter you name: ");

  console.log("Welcome "+ userName + " let's check if you know me..");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;    
  } else {
    console.log("wrong!");   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Your Score is: ", score);

  console.log("Highest Scorer is: ");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();


