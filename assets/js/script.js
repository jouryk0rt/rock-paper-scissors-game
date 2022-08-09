// variables
// some of the javascript is from Coding Artist; https://www.youtube.com/watch?v=Iwvf9iBP04M&t=530s
let compScore = 0;
let userScore = 0;
let getResult = document.getElementById("result");
let possibleChoices = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose',
        'lizard' : 'win',
        'spock' : 'lose'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw',
        'lizard' : 'lose',
        'spock' : 'win'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win',
        'lizard' : 'win',
        'spock' : 'lose'
    },
    'lizard' : {
        'rock' : 'lose',
        'scissor' : 'lose',
        'paper' : 'win',
        'lizard' : 'draw',
        'spock' : 'win'
    },
    'spock' : {
        'rock' : 'win',
        'scissor' : 'win',
        'paper' : 'lose',
        'lizard' : 'lose',
        'spock' : 'draw'
    }

}

/** Function for controls and results within the javascript rpsls game */
function control(input){
    // Let the computer make a random choice in the array and prints the users and computer's choices to screen
    const choices = ["rock", "paper", "scissor", "lizard", "spock"];
    let num1 = Math.floor(Math.random() * 5);

    document.getElementById("comp_choice").innerHTML = `Computer chooses <span>${choices[num1].toUpperCase()}</span>`;
    
    document.getElementById("user_choice").innerHTML = `You choose <span>${input.toUpperCase()}</span>`;


    // Deciding the winner using case
    let computerChoice = choices[num1]; 

 switch(possibleChoices[input][computerChoice]){
    case 'win':
        getResult.innerHTML = "You have <b>WON</b> this round!";
        userScore++;
        break;
    case 'draw':
        getResult.innerHTML = "You have <b>TIED</b> this round!";
        break;
    case 'lose':
        getResult.innerHTML = "You have <b>LOST</b> this round!";
        compScore++;
        break;
        default: 
        getResult.innerHTML = "Error occured... please try again";
 }

// Setting the score amount / amount of wins in the html of the webpage
 document.getElementById("comp_score").innerHTML = compScore;

 document.getElementById("user_score").innerHTML = userScore;
}
