const getdata = () => {
  let data = [];
  if (localStorage.getItem('scores')) {
    data = JSON.parse(localStorage.getItem('scores'));
  }
  return data;
};

export default getdata;
