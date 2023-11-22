let homeScore = 0;
let awayScore = 0;
let history = [];

function updateDisplay() {
    document.getElementById("homeScore").textContent = homeScore;
    document.getElementById("awayScore").textContent = awayScore;
}

function recordCurrentState() {
    history.push({ homeScore, awayScore });
}

function undoLastAction() {
    if (history.length > 0) {
        const lastState = history.pop();
        homeScore = lastState.homeScore;
        awayScore = lastState.awayScore;
        updateDisplay();
    }
}

function clearScores() {
    if (confirm("Are you sure you want to clear all the scores?")) {
        homeScore = 0;
        awayScore = 0;
        history = []; // Optionally clear the history as well
        updateDisplay();
    }
}


function addOneHome() {
    recordCurrentState();
    homeScore += 1;
    updateDisplay();
}

function addTwoHome() {
    recordCurrentState();
    homeScore += 2;
    updateDisplay();
}

function addThreeHome() {
    recordCurrentState();
    homeScore += 3;
    updateDisplay();
}

function addOneAway() {
    recordCurrentState();
    awayScore += 1;
    updateDisplay();
}

function addTwoAway() {
    recordCurrentState();
    awayScore += 2;
    updateDisplay();
}

function addThreeAway() {
    recordCurrentState();
    awayScore += 3;
    updateDisplay();
}


