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
    inputData !== "rock" ||
    inputData !== "paper" ||
    inputData !== "scissors"
  ) {
    return false;
  } else {
    return true;
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

  return output;
}

console.log("computer output is: " + computerPlay());
console.log("person output is: " + personPlay());
