import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Gallery from './Gallery';

function HomePage() {
  return (
    <>
      <Header />
      <Banner
        image="src/assets/top_img.png"
        text="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </>
  );
}

export default HomePage;
