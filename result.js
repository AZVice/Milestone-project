
const resultContainer = document.getElementById("result-card");
resultContainer.textContent = ("PLACE YOUR BET ");
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

const buttonClickSound = document.getElementById("buttonClickSound");
buttonClickSound.play();


function winnerCheck(){
    if (cardOneDiv.textContent === cardTwoDiv.textContent && cardTwoDiv.textContent === cardThreeDiv.textContent) {
        if (cardOneDiv.textContent === 7) {
            currentScore *= 10;
            resultContainer.textContent = "Jackpot";
            const winnerPageURL = "winnerPage.html";
            const winWindow = window.open(winnerPageURL, '_blank');
            spin.disabled = true;

            setTimeout(function() {
                winWindow.close();
                spin.disabled = false;
            }, 6000);
        }else {
            currentScore += betAmount * 6;
            resultContainer.textContent =("You Won X6")
        };
        /*
    } else if (cardOneDiv.textContent === cardTwoDiv.textContent && cardTwoDiv.textContent === cardThreeDiv.textContent && cardOneDiv.textContent !== 7){
        currentScore += betAmount * 6;
        resultContainer.textContent =("You Won X6");
        */
    }else if (cardOneDiv.textContent === cardTwoDiv.textContent || cardOneDiv.textContent === cardThreeDiv.textContent || cardTwoDiv.textContent === cardThreeDiv.textContent) {
                currentScore += betAmount * 4;
                resultContainer.textContent = "You Won X4";
    } else {
                resultContainer.textContent = "Try again!";
    }

    updateCreditScreen();
}
/*
function addCredits(){
    currentScore *=2;
    updateCreditScreen();
}
*/