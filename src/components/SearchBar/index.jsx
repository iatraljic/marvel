import React from 'react';

function SearchBar() {

  const handleChange = (e) => {
    console.log(e.target.value);
  }

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