// create a table of strengths and weaknesses
var handsTable = {
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

function playRound(personHand, computerHand) {
  if (handsTable[personHand].strongTo === computerHand) {
    return ["Win!", personHand, computerHand];
  } else if (handsTable[personHand].weakTo === computerHand) {
    return ["Lose", personHand, computerHand];
  } else {
    return ["Tie", personHand, computerHand];
  }
}

function handToImage(hand) {
  // return a uri of the image of a hand
  switch (hand) {
    case "rock":
      return "https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/270a.svg";
    case "paper":
      return "https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/270b.svg";
    case "scissors":
      return "https://cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/270c.svg";
  }
}

function game(myHand) {
  var enemyHand = computerPlay();
  const message = document.querySelector(".message");

  // initialize variable if this is the first time in the loop
  if (typeof gamesPlayed == "undefined") {
    gamesPlayed = 0;
    myScore = 0;
    enemyScore = 0;
  }

  var matchResult = playRound(myHand, enemyHand);
  if (matchResult[0] == "Win!") {
    myScore += 1;
  } else if (matchResult[0] == "Lose") {
    enemyScore += 1;
  }

  var scoreboard;
  scoreboard = document.querySelector(".scoreboard");
  // add a "x won y" type of element to create a "scoreboard"
  var content = document.createElement("div");

  var myHandResult = document.createElement("img");
  myHandResult.setAttribute("src", handToImage(matchResult[1]));
  myHandResult.setAttribute("width", "100px");
  myHandResult.style.paddingLeft = "1rem";
  content.appendChild(myHandResult);

  var resultMessage = document.createElement("p");
  resultMessage.classList.add("message");
  resultMessage.innerText = matchResult[0];
  content.appendChild(resultMessage);

  var enemyHandResult = document.createElement("img");
  enemyHandResult.setAttribute("src", handToImage(matchResult[2]));
  enemyHandResult.setAttribute("width", "100px");
  content.appendChild(enemyHandResult);

  content.style.display = "grid";
  content.style.gridAutoFlow = "column";

  scoreboard.insertBefore(content, scoreboard.firstChild);

  gamesPlayed += 1;

  // if (gamesPlayed != 5) {
  //   game();
  // }

  // return [myScore, enemyScore];
}

var hands = document.querySelectorAll(".hand");

hands.forEach((key) => {
  key.addEventListener("click", (e) => {
    game(e.target.alt);
    try {
      document.querySelector(".removeme").remove();
    } catch (err) {}
  });
});

// result = game();
// console.log(result);
