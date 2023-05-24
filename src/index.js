import './style.css';
import data from '../modules/app.js';
import add from '../modules/add.js';
import scoreData from '../modules/score.js';
import showScores from '../modules/showscores.js';
import ClearAllScores from '../modules/clearScore.js';

const form = document.querySelector('.form');
const refresh = document.querySelector('.Refresh');

refresh.addEventListener('click', () => {
  ClearAllScores();
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = form.name.value;
  const score = form.score.value;
  data(name, score);
  add(form.name.value, form.score.value);
  showScores();
  form.reset();
});
showScores();
scoreData();