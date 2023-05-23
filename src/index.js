import './style.css';
import data from '../modules/app.js';
import showScores from '../modules/showscores.js';

const form = document.querySelector('.form');
showScores();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value;
  const score = form.score.value;
  data(name, score);
  showScores();
  form.reset();
});
