//Span for displaying the number of likes and dislikes
let countUp = document.getElementById('upCount');
let countDown = document.getElementById('downCount');

//Buttons for like and dislike
let upBtn = document.getElementById('voteUp');
let downBtn = document.getElementById('voteDown')

//Counter initializers
let countU = 0
let countD = 0

//Display initial like and dislike amounts
countUp.innerHTML = countU
countDown.innerHTML = countD

//Functions for when button is clicked
const voteUp = () => {
    countU++;
    countUp.innerHTML = countU;
}

const voteDown = () => {
    countD++;
    countDown.innerHTML = countD;
}

//Displays the amount of likes and dislikes after button has been clicked
upBtn.document.addEventListener("click", voteUp)
downBtn.document.addEventListener("click", voteDown)