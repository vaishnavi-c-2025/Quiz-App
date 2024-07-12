const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value; //if there's nothing in there or if it is falsy then disabled.

});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value,
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score) //if b score is higher than a score, put b before a.
    highScores.splice(5); //remove everything after index 5
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/"); //go back home after entering the score
};