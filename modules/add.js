import showScores from './showscores.js';

const add = async (user, Score) => {
  const ID = '4iWhaPUyox6pHAr1pbvY';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`;
  const newScore = {
    user:user,
    Score:Score
  };

  const postScore = async () => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newScore),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return res.json();
  };
  showScores();
  const res = await postScore().then((data) => data);
  return res;
};
add('Name', 2);
export default add;
