let homeScore = 0;
let guestScore = 0;

let homeScoreDisplay = document.getElementById("home-score");
let guestScoreDisplay = document.getElementById("guest-score");

let homePlusOneBtn = document.getElementById("home-plus-one");
let homePlusTwoBtn = document.getElementById("home-plus-two");
let homePlusThreeBtn = document.getElementById("home-plus-three");

let guestPlusOneBtn = document.getElementById("guest-plus-one");
let guestPlusTwoBtn = document.getElementById("guest-plus-two");
let guestPlusThreeBtn = document.getElementById("guest-plus-three");

let btnRestart = document.getElementById("btn-restart")

// Home buttons

homePlusOneBtn.addEventListener('click', () => {
    homeScore += 1
    homeScoreDisplay.textContent = homeScore
})

homePlusTwoBtn.addEventListener('click', () => {
    homeScore += 2
    homeScoreDisplay.textContent = homeScore
}) 

homePlusThreeBtn.addEventListener('click', () => {
    homeScore += 3
    homeScoreDisplay.textContent = homeScore
})

// Guest buttons

guestPlusOneBtn.addEventListener('click', () => {
    guestScore += 1
    guestScoreDisplay.textContent = guestScore
})

guestPlusTwoBtn.addEventListener('click', () => {
    guestScore += 2
    guestScoreDisplay.textContent = guestScore
})

guestPlusThreeBtn.addEventListener('click', () => {
    guestScore += 3
    guestScoreDisplay.textContent = guestScore
})

// Restart button

btnRestart.addEventListener('click', () => {
    homeScore = 0
    guestScore = 0

    homeScoreDisplay.textContent = homeScore
    guestScoreDisplay.textContent = guestScore
})