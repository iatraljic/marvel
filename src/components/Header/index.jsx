import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { inputValueAsync } from '../../actions';

import './index.css';

function Header() {
  const dispatch = useDispatch();
  const totalCharacters = useSelector(store => store.searchReducer.total);

  const [searchFilter, setSearchFilter] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const showPagination = () => {
    const totalPages = Math.ceil(totalCharacters / 20);
    let pagination = [];

    for (let i = 0; i < totalPages; i++) {
      pagination.push(
        <div
          className={
            pageNum === i + 1 ? "page-number active-pn" : "page-number"
          }
          key={i}
          onClick={() => handleClick(i)}
        >{i + 1}</div>
      );
    };

    return pagination;
  }

  const handleChange = (value, offset, type) => {
    setSearchFilter(value);
    dispatch(inputValueAsync(value, offset * 20));
  };

  const handleClick = (offset) => {
    if (offset + 1 !== pageNum) {
      setPageNum(offset + 1);
      dispatch(inputValueAsync(searchFilter, offset * 20));
    }
  };

  return (
    <div className="header">
      <div className="search-bar">
        <div
          className="app-logo"
          style={{ backgroundImage: 'url(./assets/logo.svg)' }}
        ></div>
        <input
          className='sb-input'
          type='text'
          placeholder='Explore characters'
          onChange={(e) => handleChange(e.target.value, 0)}
        />
      </div>
      <div
        className="pagination"
      >
        {
          totalCharacters ? showPagination() : <></>
        }
      </div>
    </div>
  );
};

export default Header;