import getdata from './getdata.js';

const data = (name, score) => {
  const scores = getdata();
  scores.push({ name, score });
  localStorage.setItem('scores', JSON.stringify(scores));
};

export default data;