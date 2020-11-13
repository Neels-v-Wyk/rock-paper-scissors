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
    gamesPlayed += 1;
  } else if (matchResult[0] == "Lose") {
    enemyScore += 1;
    gamesPlayed += 1;
  }

  var scoreboard;
  scoreboard = document.querySelector(".scoreboard");
  // add a "x won y" type of element to create a "scoreboard"
  var content = document.createElement("div");
  content.style.justifyItems = "center";
  content.style.display = "flex";
  content.style.justifyContent = "center";

  var myHandResult = document.createElement("img");
  myHandResult.setAttribute("src", handToImage(matchResult[1]));
  myHandResult.setAttribute("width", "100px");
  myHandResult.style.justifySelf = "right";
  content.appendChild(myHandResult);

  var resultMessage = document.createElement("p");
  resultMessage.classList.add("message");
  resultMessage.innerText = matchResult[0];
  resultMessage.style.minWidth = "200px";
  resultMessage.style.padding = "10px";
  content.appendChild(resultMessage);

  var enemyHandResult = document.createElement("img");
  enemyHandResult.setAttribute("src", handToImage(matchResult[2]));
  enemyHandResult.setAttribute("width", "100px");
  content.appendChild(enemyHandResult);

  scoreboard.insertBefore(content, scoreboard.firstChild);

  var round = document.querySelectorAll(".round");
  for (var i = 0; i < round.length; i++) {
    round[i].innerHTML = "Round: " + gamesPlayed;
  }

  var score = document.querySelectorAll(".score");
  for (var i = 0; i < score.length; i++) {
    score[i].innerHTML = "Score: " + myScore;
  }

  // if (gamesPlayed != 5) {
  //   game();
  // }

  // return [myScore, enemyScore];
}

function unpop(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("pop");
}

var hands = document.querySelectorAll(".hand");

hands.forEach((hand) => {
  hand.addEventListener("click", (e) => {
    // play one game on click
    game(e.target.alt);

    if (document.querySelector(".removeme")) {
      document.querySelector(".removeme").remove();
    }

    // add a little "pop" when you click it
    hand.classList.add("pop");
  });

  hand.addEventListener("transitionend", unpop);
});

// result = game();
// console.log(result);
