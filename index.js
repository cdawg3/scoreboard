let homePoints = 0
let guestPoints = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

// Home team add points
function addOne() {
    homePoints += 1;
    homeScore.innerText = homePoints;
}

function addTwo() {
  homePoints += 2;
  homeScore.innerText = homePoints;
}

function addThree() {
  homePoints += 3;
  homeScore.innerText = homePoints;
}

//Home team subtract points
function subOne() {
  homePoints -= 1;
  homeScore.innerText = homePoints;
}

function subTwo() {
  homePoints -= 2;
  homeScore.innerText = homePoints;
}

function subThree() {
  homePoints -= 3;
  homeScore.innerText = homePoints;
}

//Guest team add points
function addOne2() {
  guestPoints += 1;
  guestScore.innerText = guestPoints;
}

function addTwo2() {
  guestPoints += 2;
  guestScore.innerText = guestPoints;
}

function addThree2() {
  guestPoints += 3;
  guestScore.innerText = guestPoints;
}

//Guest team subtract points
function subOne2() {
  guestPoints -= 1;
  guestScore.innerText = guestPoints;
}

function subTwo2() {
  guestPoints -= 2;
  guestScore.innerText = guestPoints;
}

function subThree2() {
  guestPoints -= 3;
  guestScore.innerText = guestPoints;
}