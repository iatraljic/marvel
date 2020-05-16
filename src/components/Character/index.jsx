import React from 'react';

import './index.css';

function Character({character}) {
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
        </div>
      </a>
    </div>
  );
}

export default Character;