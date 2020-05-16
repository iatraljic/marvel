import React from 'react';
import { useDispatch } from 'react-redux';

import { inputValue } from '../../actions';

function SearchBar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputValue(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        className='sb-input'
        type='text'
        placeholder='Type a Marvel character'
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default SearchBar;