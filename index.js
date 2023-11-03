
const cardOneDiv = document.getElementById("card-1");
const cardTwoDiv = document.getElementById("card-2");
const cardThreeDiv = document.getElementById("card-3");
const spin1 = document.getElementById("btn1");
const spin2 = document.getElementById("btn2");
const spin3 = document.getElementById("btn3");

//const resultContainer = document.getElementById("result-card");
const scoreContainer = document.getElementById("score-card"); 


function randomNumber(){ //Math.random explained by YouTube video "Frontend Web Development Bootcamp course" by freedCodeCamp.org, time stamp 8:19.05. 
    const ranNum1 = Math.floor(Math.random() * 10) +1;
    const ranNum2 = Math.floor(Math.random() * 10) +1;
    const ranNum3 = Math.floor(Math.random() * 10) +1;

    cardOneDiv.textContent = ranNum1;
    cardTwoDiv.textContent = ranNum2;
    cardThreeDiv.textContent = ranNum3;
    

    cardOneDiv.style.fontSize= "150px";
    cardTwoDiv.style.fontSize= "150px";
    cardThreeDiv.style.fontSize= "150px";

}

randomNumber();

