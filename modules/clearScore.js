import showScores from './showscores.js';

const ClearAllScores = () => {
  localStorage.setItem('scores', JSON.stringify([]));
  showScores();
};

export default ClearAllScores;