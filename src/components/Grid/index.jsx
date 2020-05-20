import React from 'react';
import { useSelector } from 'react-redux';

import Character from '../Character';

import './index.css';

function Grid() {
  const bookmarkedCharacters = useSelector(store => store.bookmarkReducer);
  const characters = useSelector(store => store.searchReducer.results);
  const errorMessage = useSelector(store => store.searchReducer.error);
  const loader = useSelector(store => store.loaderReducer);


  const showCharacters = (gridCharacters) => {
    
    const grid = gridCharacters?.map(
      (el, index) =>
        <div
          className='col t-col m-col'
          key={index}
        >
          <Character character={el} />
        </div>
    );

    if (!characters?.length)
      grid.unshift(
        <h2 style={{ width: '100%' }}>No match found, showing bookmarked</h2>
      );

    return grid;
  }

  if (errorMessage) {
    return <h2>{errorMessage}</h2>;
  } else if (loader) {
    return (
      <div
        className="loader-container"
      >
        <div
          className="loader"
          style={{ backgroundImage: 'url(./assets/loader.svg)' }}
        ></div>
      </div>
    );
  } else if (!characters?.length && !bookmarkedCharacters?.length) {
    return <h2>No match found, no bookmarked found</h2>;
  }

  return (
    <div className="grid-container">
      {
        characters?.length ?
          showCharacters(characters) : showCharacters(bookmarkedCharacters)
      }
    </div>
  );
};

export default Grid;