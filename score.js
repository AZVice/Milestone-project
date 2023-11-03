
let currentScore = 1000;


function addEventListener(button, callback){
    button.addEventListener('click', function(){
        randomNumber();
        winnerCheck();
        checkAvailableCredit();
        callback();
    });
}



addEventListener(spin1, function(){
    setBetAmount("btn1");
    document.getElementById("buttonClickSound").play();
    randomNumber();
    winnerCheck();
    updateCreditScreen();
    checkAvailableCredit();


});

addEventListener(spin2, function(){
    setBetAmount("btn2");
    document.getElementById("buttonClickSound").play();
    randomNumber();
    winnerCheck();
    updateCreditScreen();
    checkAvailableCredit();


});
addEventListener(spin3, function(){
    setBetAmount("btn3");
    document.getElementById("buttonClickSound").play();
    randomNumber();
    winnerCheck();
    updateCreditScreen();
    checkAvailableCredit();


});

const buttons = document.querySelectorAll(".button-class");

buttons.forEach(button => {
button.addEventListener("click", function() {
    if(button.id === "btn1" && currentScore >= 2) {
        currentScore -= 1; 

    }else if (button.id === "btn2" && currentScore >= 6) {
        currentScore -= 5

    }else if (button.id === "btn3" && currentScore >= 11) {
        currentScore -= 10;

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
