
let currentScore = 100;


function addSpinClickEvent(button) {
    button.addEventListener('click', function(){
        document.getElementById("buttonClickSound").play();
        randomNumber();
        setBetAmount();
        winnerCheck();
    });
};

addSpinClickEvent(spin1);
addSpinClickEvent(spin2);
addSpinClickEvent(spin3);



let betAmount = 0;

function setBetAmount(buttonId){
    if(buttonId === "btn1"){
        betAmount = 1;
    } else if (buttonId === "btn2"){
        betAmount = 5;
    } else if (buttonId === "btn3"){
        betAmount = 10;
    }
}


const buttons = document.querySelectorAll(".button-class");

buttons.forEach(button => {
button.addEventListener("click", function() {
    if(button.id === "btn1" && currentScore >= 2) {
        currentScore -= 1; 
        setBetAmount("btn1");

    }else if (button.id === "btn2" && currentScore >= 6) {
        currentScore -= 5
        setBetAmount("btn2");

    }else if (button.id === "btn3" && currentScore >= 11) {
        currentScore -= 10;
        setBetAmount("btn3");

    }else{
        const playAgainURL = "playAgain.html";
        const newWindow =  window.open(playAgainURL, '_blank')

        setTimeout (function() {
        newWindow.close();
        location.reload();
         }, 3000);
         
    }
    
    updateCreditScreen();
    });
});



function updateCreditScreen() {
    document.getElementById("score-card").textContent = "Credit: " + "$" + currentScore;
}

updateCreditScreen();











