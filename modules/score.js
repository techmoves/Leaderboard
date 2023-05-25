const scoreData = async () => {
  const ID = '4iWhaPUyox6pHAr1pbvY';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores/`;
  const retrieveScores = async () => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return res.json();
  };
  const res = await retrieveScores();

  return res;
};

export default scoreData;
