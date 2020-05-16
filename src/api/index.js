import axios from 'axios';

async function getCharacters(keyword) {
 
  const res = await axios.get(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${keyword}&apikey=0a89d12143f7b81b682ba8a14d77c769`
  );

  return res.data.data;
}

export default getCharacters;