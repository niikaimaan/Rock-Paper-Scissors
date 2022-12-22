function getComputerChoice(){
    var choices = ["Rock","Paper","Scissors"];
    choices = choices[Math.floor(Math.random() * choices.length)];
    return choices;
}

function playRound(){
    var choices;
    var playerSelection = prompt("Choose rock paper scissors");
    var computerSelection = getComputerChoice(choices);
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let win = "You Win!";
    let lose = "You Lose!";
    let tie = "It's a Tie!";
    let error = "Choose again!"

    //if player chooses rock
    if(playerSelection == "rock" && computerSelection == "rock"){
        console.log(tie);
    }

    else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log(lose);
    }

    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log(win);
    }

    //if player chooses paper
    if(playerSelection == "paper" && computerSelection == "rock"){
        console.log(win);
    }

    else if(playerSelection == "paper" && computerSelection == "paper"){
        console.log(tie);
    }

    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log(lose);
    }

    //if player chooses scissors
    if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log(lose);
    }

    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log(win);
    }

    else if(playerSelection == "scissors" && computerSelection == "scissors"){
        console.log(tie);
    }

}

function game(){
    for(let i = 0; i < 5; i++){
        playRound();
    }
}


