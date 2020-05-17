import React from 'react';

import './index.css';

function Bookmark({ isActive, onClick }) {
  return (
    <span
      onClick={onClick}
      className={`icon-bookmark${isActive ? ' active' : ''}`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' />
      </svg>
    </span>
  );
}

export default Bookmark;
