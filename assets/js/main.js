// math.random

// variable 0-2 array
// stein
// schere
// papier

// button farben ändern sich
// grün gewonnen
// rot verloren
// grau gleichstand



//* ========= Buttons click ========
// - aendert sich die how many rounds Section
// - Let's play text zeigt den Sieger/Verlierer an mit "Rock/Paper/Scissor"(comp/user) beats "Rock/Paper/Scissor"(comp/user).You win/lose!

//* Runden Anzahl Variablen
const fiveRounds = document.querySelector("#fiveRounds");
const tenRounds = document.querySelector("#tenRounds");
const fifteenRounds = document.querySelector
("#fifteenRounds");
const twentyRounds = document.querySelector("#twentyRounds");
let roundCount = 0;
let maxRoundCount = 0;

//* Form mit Radio Inputs
const form = document.querySelector("#roundsFormSection");

//* Hidden Round Counter Variable
const hiddenSection = document.querySelector("#hiddenSection")
const roundHidden = document.querySelector("#hiddenRound");

//* Rock Paper Scissor Button Variablen
const allButtons = document.querySelector(".buttonsSection");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");

//* Score counter Player und CPU
const playerScore = document.querySelector("#player");
const cpuScore = document.querySelector("#cpu");
let playerPoint = 0;
let cpuPoint = 0;

//* "Let's Play" Text wird zum Text,der Rundensiger anzeigt

let resultText = document.querySelector("#letsPlay") 


//* Functions

function cpuTurn() {
    let  selection = ["Rock", "Paper", "Scissor"];
    return selection[Math.floor(Math.random() * selection.length)];
}

//* maximale Runden Berechnen
const maxRound = () =>{
    if(fiveRounds.checked){
        maxRoundCount = 5;
        return
    }else if(tenRounds.checked){
        maxRoundCount = 10;
        return
    }else if(fifteenRounds.checked){
        maxRoundCount = 15;
        return
    }else if(twentyRounds.checked){
        maxRoundCount = 20;
        return
    }else{
    }
};

const overallScore = () => {
    if (playerScore > cpuScore){
        roundHidden.style.color = 'green';
        roundHidden.innerHTML = "YOU WIN!";
    }else if (playerPoint < cpuPoint){
        roundHidden.style.color = 'red';
        roundHidden.innerHTML = "YOU LOSE!";
    }else{
        roundHidden.innerHTML = "IT'S A DRAW!";
}}

//* Runden function
const userRound = () => {
    roundCount++;
    let counterZahl = roundCount.toString();
    roundHidden.innerHTML = `${counterZahl} / ${maxRoundCount.toString()}`;

    if (roundCount === maxRoundCount) {
        overallScore();
        allButtons.style.display = 'none';
        resultText.style.display = 'none';
    } else{}
}

//* Textanzeige function


btnRock.addEventListener("click", (event) =>{
    const userInput = btnRock.value;
    const cpuInput = cpuTurn();

    event.preventDefault();
    maxRound();

    if (maxRoundCount === 0){
        resultText.innerHTML = "Please select how many rounds you want to play";
        return
    }else{
    userRound()} // round counter

    form.style.display = "none";
    roundHidden.style.display = "block";

    if (cpuInput === "Scissor"){
        playerPoint++;
        playerScore.innerHTML = playerPoint.toString();
        resultText.innerHTML= `You chose ` + userInput + ` and the Computer chose ` + cpuInput +`. You WIN!`;
        return
    } else if (cpuInput === "Paper"){
        cpuPoint++;
        cpuScore.innerHTML = cpuPoint.toString();
        resultText.innerHTML=`You chose ` + userInput + ` and the Computer chose ` + cpuInput + `. YOU LOSE!`;
        return
    } else {
        resultText.innerHTML= `DRAW!`;
    }
})

btnPaper.addEventListener("click", (event) =>{
    const userInput = btnPaper.value;
    const cpuInput = cpuTurn();

    event.preventDefault();
    maxRound();

    if (maxRoundCount === 0){
        resultText.innerHTML = "Please select how many rounds you want to play";
        return
    }else{
    userRound()} // round counter

    form.style.display = "none";
    roundHidden.style.display = "block";

    if (cpuInput === "Rock"){
        playerPoint++;
        playerScore.innerHTML = playerPoint.toString();
        resultText.innerHTML= `You chose ` + userInput + ` and the Computer chose ` + cpuInput +`. You WIN!`;
        return
    } else if (cpuInput === "Scissor"){
        cpuPoint++;
        cpuScore.innerHTML = cpuPoint.toString();
        resultText.innerHTML=`You chose ` + userInput + ` and the Computer chose ` + cpuInput + `. YOU LOSE!`;
        return
    } else {
        resultText.innerHTML= `DRAW!`;
    }
})

btnScissor.addEventListener("click", (event) =>{
    const userInput = btnScissor.value;
    const cpuInput = cpuTurn();

    event.preventDefault();
    maxRound();

    if (maxRoundCount === 0){
        resultText.innerHTML = "Please select how many rounds you want to play";
        return
    }else{
    userRound()} // round counter

    form.style.display = "none";
    roundHidden.style.display = "block";

    if (cpuInput === "Paper"){
        playerPoint++;
        playerScore.innerHTML = playerPoint.toString();
        resultText.innerHTML= `You chose ` + userInput + ` and the Computer chose ` + cpuInput +`. You WIN!`;
        return
    } else if (cpuInput === "Rock"){
        cpuPoint++;
        cpuScore.innerHTML = cpuPoint.toString();
        resultText.innerHTML=`You chose ` + userInput + ` and the Computer chose ` + cpuInput + `. YOU LOSE!`;
        return
    } else {
        resultText.innerHTML= `DRAW!`;
    }
})