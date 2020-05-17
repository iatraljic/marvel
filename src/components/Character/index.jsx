import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';

import Bookmark from '../Bookmark';
import { addBookmark, removeBookmark } from '../../actions';

function Character({ character }) {
  const [isActive, setIsActive] = useState(false);
  const bookmark = useSelector(store => store.bookmarkReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const found =
      bookmark.findIndex((element) => element.id === character.id);
    setIsActive(found !== -1);
  }, [bookmark, character]);

  const handleClick = (event) => {
    event.preventDefault();

    if (isActive) {
      dispatch(removeBookmark(character));
    } else {
      dispatch(addBookmark(character));
    }
  };

  if (character.id === null) {
    return <></>;
  }

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
