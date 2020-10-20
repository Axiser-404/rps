const RockBtn = document.querySelectorAll("button")[0]
const PaperBtn = document.querySelectorAll("button")[1]
const ScissorsBtn = document.querySelectorAll("button")[2]

const ScoreScreen = document.querySelectorAll("h1")[1]
const ScoreText = document.querySelectorAll("h1")[0]

const PlayerHand = document.querySelectorAll("img")[0]
const AiHand = document.querySelectorAll("img")[1]

var PlayerScore = 0, AiScore = 0 ,AiRandomiser = 0 , playerIndex = 0;

RockBtn.addEventListener("click", ClickedRock )
PaperBtn.addEventListener("click", ClickedPaper )
ScissorsBtn.addEventListener("click", ClickedScissors )



function UpdateScore(){
    ScoreScreen.innerText = PlayerScore + ":" + AiScore;
}


function PlayerWin (){
    PlayerScore = PlayerScore +1;
    ScoreText.innerText = "You won"
    UpdateScore()
}

function AiWin(){
    AiScore = AiScore +1;
    ScoreText.innerText = "You Lost"
    UpdateScore()
}

function Tie(){
    ScoreText.innerText = "Tie"   
}

function ClickedRock(){

    PlayerHand.src = "./Images/Rock.png"

    playerIndex = 0;
    ComputeScore()

}

function ClickedPaper(){

    PlayerHand.src = "./Images/Paper.png"

    playerIndex = 1;
    ComputeScore()
}

function ClickedScissors(){

    PlayerHand.src = "./Images/Scissors.png"
    playerIndex = 2;
    ComputeScore()

}

function Ai(){
    AiRandomiser = Math.floor(Math.random() * 3)

    if (AiRandomiser === 0){
        AiHand.src = "./Images/Rock Ai.png"
    }

    if (AiRandomiser === 1){
        AiHand.src = "./Images/Paper Ai.png"
    }

    if (AiRandomiser === 2){
        AiHand.src = "./Images/Scissors Ai.png"
    }
}


function ComputeScore(){

    Ai()

    if(playerIndex === AiRandomiser){
        Tie()
    }

    if (playerIndex === 0){

        if(AiRandomiser === 1){
            AiWin()
        }

        if(AiRandomiser === 2){
            PlayerWin()
        }
    }

    if (playerIndex === 1){

        if(AiRandomiser === 2){
            AiWin()
        }

        if(AiRandomiser === 0){
            PlayerWin()
        }
    }

    if (playerIndex === 2){

        if(AiRandomiser === 0){
            AiWin()
        }

        if(AiRandomiser === 1){
            PlayerWin()
        }
    }

    
}

