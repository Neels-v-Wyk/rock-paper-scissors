// create a table of strengths and weaknesses
const handsTable = {
  rock: { weakTo: "paper", strongTo: "scissors" },
  paper: { weakTo: "scissors", strongTo: "rock" },
  scissors: { weakTo: "rock", strongTo: "paper" },
};

function computerPlay() {
  // return a random number between 0 and 2, i.e. 0, 1, 2
  var outcome = Math.floor(Math.random() * 3);

  switch (outcome) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// create an input validator to check whether or not the person entered meaningful data
function checkInput(inputData) {
  inputData.toLowerCase();

  if (
    inputData === "rock" ||
    inputData === "paper" ||
    inputData === "scissors"
  ) {
    return true;
  } else {
    return false;
  }
}

function personPlay() {
  var input = prompt("rock, paper, scissors?");

  if (checkInput(input)) {
    return input;
  } else {
    alert("Please enter either 'rock', 'paper' or 'scissors'");
    personPlay();
  }
}

function playRound(personHand, computerHand) {
  if (handsTable[personHand].strongTo === computerHand) {
    console.log("You win! " + personHand + " wins " + computerHand);
    return "win";
  } else if (handsTable[personHand].weakTo === computerHand) {
    console.log("Computer wins! " + computerHand + " wins " + personHand);
    return "lose";
  } else {
    return "tie";
  }
}

function game() {
  var myHand = personPlay();
  var enemyHand = computerPlay();

  // initialize variable if this is the first time in the loop
  if (typeof gamesPlayed == "undefined") {
    gamesPlayed = 0;
    myScore = 0;
    enemyScore = 0;
  }

  var matchResult = playRound(myHand, enemyHand);
  if (matchResult == "win") {
    myScore += 1;
  } else if (matchResult == "lose") {
    enemyScore += 1;
  }

  gamesPlayed += 1;
  console.log("match result: " + matchResult);

  if (gamesPlayed != -1) {
    game();
  }

  return [myScore, enemyScore];
}

var hands = document.querySelectorAll(".hand");

hands.forEach((key) => {
  key.addEventListener("click", () => {
    console.log("Button clicked.");
  });
});

// result = game();
// console.log(result);
