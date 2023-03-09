import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': 'b4f30782b6mshed1ad8508e0e2f6p11abc2jsn01c5f3358df1',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromApis = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(data + " from FFA "+ BASE_URL+" url = " + url);
  return data;
};
 