let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#Computer-score") 

const gencompchoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randonIdx = Math.floor(Math.random() * 3);
  return options[randonIdx];
};

const draw = () => {
  console.log("game was draw, play again!");
  msg.innerText = "Game was draw, play again!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userchoice, compchoice) => {
    if(userWin){
        console.log("You Win!")
        userscore++;
        userScore.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("You Lose!")
        compscore++;
        compScore.innerText = compscore;
        msg.innerText = `You Lost!  ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
  console.log("Vansh's choice = ", userchoice);
  const compchoice = gencompchoice();
  console.log("comp's choice = ", compchoice);

  if (userchoice === compchoice) {
    draw();
  } else {
    let userWin = true;
    if(userchoice === "Rock"){
        userWin = compchoice === "Paper" ? false : true;
    } else if (userchoice === "Paper") { 
        userWin = compchoice === "Scissors" ? false : true;
    } else if (userchoice === "Scissors"){
        userWin = compchoice === "Rock" ? false : true;
    }
    showWinner(userWin, userchoice, compchoice);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
