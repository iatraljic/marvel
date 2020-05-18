import axios from 'axios';

async function getCharacters(keyword) {

  let res = [];
  if (keyword !== '') {
    res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${keyword}&apikey=0a89d12143f7b81b682ba8a14d77c769`
    );
  } else {
    return res;
  }

  return res.data.data;

}

export default getCharacters;