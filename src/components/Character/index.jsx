import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Bookmark from '../Bookmark';
import { addBookmark, removeBookmark } from '../../actions';

import './index.css';

function Character({ character }) {
  const dispatch = useDispatch();
  const isActive = useSelector(store => store.bookmarkReducer);
  
  const handleClick = (event) => {
    event.preventDefault();

    if (isActive) {
      dispatch(removeBookmark());
    } else {
      dispatch(addBookmark());
    }
  };


  return (
    <div className='character'>
      <a href={character.urls[0].url} target='_blank' rel='noopener noreferrer'>
        <div className='character-thumb'>
          <figure className='img-wrapper'>
            <img
              src={character.thumbnail.path + '.' + character.thumbnail.extension}
              alt={''}
            />
          </figure>
        </div>
        <div className='character-info'>
          <p>{character.name}</p>
          <Bookmark isActive={isActive} onClick={handleClick} />
        </div>
      </a>
    </div>
  );
}

export default Character;