import getdata from './getdata.js';

const showScores = (scores = getdata()) => {
  const tablebody = document.querySelector('.tb');
  tablebody.innerHTML = '';
  scores.forEach((score) => {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const userScore = document.createElement('td');
    name.textContent = score.name;
    userScore.textContent = score.score;
    row.appendChild(name);
    row.appendChild(userScore);
    tablebody.appendChild(row);
  });
};

export default showScores;
