// @flow

// TODO better typing here
const FetchData = (params: string = 'info'): Promise<*> => {
  const URL = `https://api.spacexdata.com/v2/${params}`;

  return fetch(URL)
    .then(response => response.json())
    .then(data => data);
};

export default FetchData;
