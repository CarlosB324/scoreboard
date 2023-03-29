let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function homePoints1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homePoints2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homePoints3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guestPoints1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestPoints2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestPoints3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function newGame() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    homeScore = 0
    guestScore = 0
}
