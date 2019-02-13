import axios from 'axios';

const BASE_URL = 'http://api.giphy.com/v1/gifs/search';

async function getGifs() {
  try {
    const gifs = await axios(`${BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}&q=kittens`);
    return gifs;
  }
  catch(error) {
    console.error(error);
  };
};

export default getGifs;
