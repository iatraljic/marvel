import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { inputValueAsync } from '../../actions';

import './index.css';

function SearchBar() {
  const dispatch = useDispatch();
  const [searchFilter, setSearchFilter] = useState('');

  const totalCharacters = useSelector(store => store.searchReducer.total);

  const showPagination = () => {
    const totalPages = Math.ceil(totalCharacters / 20);
    let pagination = [];

    for (let i = 0; i < totalPages; i++) {
      pagination.push(
        <div
          key={i}
          onClick={() => handleChange(-1, (i))}
        >{i + 1}</div>
      );
    };

    return pagination;
  }

  const handleChange = (e, offset) => {

    if (e !== -1) {
      setSearchFilter(e);
      dispatch(inputValueAsync(e, offset*20));
    } else {
      dispatch(inputValueAsync(searchFilter, offset*20));
    }

    
  };

  return (
    <div className="search-bar">
      <input
        className='sb-input'
        type='text'
        placeholder='Search characters'
        onChange={(e) => handleChange(e.target.value, 0)}
      />
      <div
        className="pagination"
      >
        {
          totalCharacters && showPagination()
        }
      </div>
    </div>
  );
};

export default SearchBar;