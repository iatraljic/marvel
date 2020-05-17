import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { inputValueAsync } from '../../actions';

import Character from '../Character';

function Grid() {
  const characters = useSelector(store => store.searchReducer.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(inputValueAsync(''));
  }, []);

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