import React from 'react';

import Grid from '../../components/Grid';

import './index.css';
import SearchBar from '../../components/SearchBar';


function Home() {
  return (
    <>
      <SearchBar />
      <Grid/>
    </>
  );
};

export default Home;