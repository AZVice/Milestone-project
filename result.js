
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



function winnerCheck(){
    if (cardOneDiv.textContent === cardTwoDiv.textContent && cardTwoDiv.textContent === cardThreeDiv.textContent){
        if(cardOneDiv.textContent === "7") {
            resultContainer.textContent = "Jackpot";
            const winnerPageURL = "winnerPage.html";
            const winWindow = window.open(winnerPageURL, '_blank');
            currentScore *= 10;
            document.getElementById("jackpotSound").play();
            spin1.disabled = true;
            spin2.disabled = true;
            spin3.disabled = true;

            setTimeout(function() {
                winWindow.close();
                spin1.disabled = false;
                spin2.disabled = false;
                spin3.disabled = false;
        }, 6000);
    
            
        }else {
            currentScore += betAmount * 6;
            document.getElementById("winnerX6Sound").play();
            resultContainer.textContent =("You Won X6");
        }
        
    }else if (cardOneDiv.textContent === cardTwoDiv.textContent || cardOneDiv.textContent === cardThreeDiv.textContent || cardTwoDiv.textContent == cardThreeDiv.textContent) {
        currentScore += betAmount * 4;
        document.getElementById("winnerX4Sound").play();
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

//cardOneDiv.textContent === cardTwoDiv.textContent || cardOneDiv.textContent === cardThreeDiv.textContent || cardTwoDiv.textContent === cardThreeDiv.textContent)