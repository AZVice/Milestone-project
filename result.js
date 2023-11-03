
const resultContainer = document.getElementById("result-card");
resultContainer.textContent = ("PLACE YOUR BET ");


function winnerCheck() {
    if (cardOneDiv.textContent === cardTwoDiv.textContent && cardTwoDiv.textContent === cardThreeDiv.textContent) {
        if (cardOneDiv.textContent === 7) {
            resultContainer.textContent = "Jackpot";
            const winnerPageURL = "winnerPage.html";
            const winWindow = window.open(winnerPageURL, '_blank');
            currentScore *= 10;
            document.getElementById("jackpotSound").play();
            disableSpin();

            setTimeout(function () {
                winWindow.close();
                enableSpin();
            }, 6000);

        } else {
            currentScore += betAmount * 6;
            document.getElementById("winnerX6Sound").play();
            resultContainer.textContent = "You Won X6";
            disableSpin();

            setTimeout(function() {
                enableSpin();
            }, 4000);
        }
    } else if (cardOneDiv.textContent === cardThreeDiv.textContent) {
        currentScore += betAmount * 4;
        document.getElementById("winnerX4Sound").play();
        resultContainer.textContent = "You Won X4";
        disableSpin();
        setTimeout(function() {
            enableSpin();
        }, 1000);
    } else {
        resultContainer.textContent = "Try again!";
    }

    updateCreditScreen();
};



function disableSpin(){
    spin1.disabled = true;
    spin2.disabled = true;
    spin3.disabled = true;
}

function enableSpin(){
    spin1.disabled = false;
    spin2.disabled = false;
    spin3.disabled = false;

}