import React from 'react';
import { useSelector } from 'react-redux';

import Character from '../Character';

function Grid() {
  const characters = useSelector(store => store.searchReducer.results);

  console.log(characters);

  const showCharacters = () => {
    const grid = characters.map(
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
        characters && showCharacters()
      }
    </div>
  );
};

export default Grid;