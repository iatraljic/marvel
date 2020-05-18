import axios from 'axios';

async function getCharacters(payload) {

  let res = [];
  if (payload.value !== '') {
    res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?offset=${payload.offset}&nameStartsWith=${payload.value}&apikey=0a89d12143f7b81b682ba8a14d77c769`
    );
  } else {
    return res;
  }

  return res.data.data;

}

export default getCharacters;