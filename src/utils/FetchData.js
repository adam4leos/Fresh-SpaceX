const FetchData = (params = 'info') => {
  const URL = `https://api.spacexdata.com/v2/${params}`;

  return fetch(URL)
    .then(response => response.json())
    .then(data => data);
};

export default FetchData;
