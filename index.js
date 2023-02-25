let homePoints = 0
let guestPoints = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

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