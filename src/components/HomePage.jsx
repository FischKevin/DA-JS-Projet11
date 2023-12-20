import React from 'react';
import Header from './Header';
import Banner from './Banner';

function HomePage() {
  return (
    <>
      <Header />
      <Banner 
        image="src/assets/top_img.png"
        text="Chez vous, partout et ailleurs"
      />
    </>
  );
}

export default HomePage;
