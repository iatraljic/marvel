import React from 'react';
import { useSelector } from 'react-redux';

import Character from '../Character';

import './index.css';

function Grid() {
  const bookmarkedCharacters = useSelector(store => store.bookmarkReducer);
  const characters = useSelector(store => store.searchReducer.results);


  const showCharacters = (gridCharacters) => {
    
    const grid = gridCharacters?.map(
      (el, index) => 
        <div
          className='col t-col m-col'
          key={index}
        >
          <Character character={el}/>
        </div>
    )

    return grid;
  }

  return (
    <div className="grid-container">
      {
        characters?.length ?
          showCharacters(characters) : showCharacters(bookmarkedCharacters)
      }
      {
        !characters?.length && characters !== undefined &&
        <div
          className="loader-container"
        >
          <div
            className="loader"
            style={{backgroundImage: 'url(./assets/loader.svg)'}}
          ></div>
        </div>
      }
    </div>
  );
};

export default Grid;