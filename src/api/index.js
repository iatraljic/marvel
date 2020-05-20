import axios, { CancelToken } from 'axios';
import { CANCEL } from 'redux-saga';

async function getCharacters(payload) {
  let res = [];

  const source = CancelToken.source();

  if (payload.value !== '') {
    res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?offset=${payload.offset}&nameStartsWith=${payload.value}&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`,
      { cancelToken: source.token }
    );
  } else {
    return res;
  }

  res[CANCEL] = () => source.cancel();

  return res.data.data;

}

export default getCharacters;