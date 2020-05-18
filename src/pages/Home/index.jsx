import React from 'react';

import Grid from '../../components/Grid';
import SearchBar from '../../components/SearchBar';

import './index.css';


function Home() {
  return (
    <>
      <SearchBar />
      <Grid/>
    </>
  );
};

export default Home;