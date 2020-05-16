import React from 'react';
import { useDispatch } from 'react-redux';

import { inputValueAsync } from '../../actions';

import './index.css';

function SearchBar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputValueAsync(e.target.value));
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