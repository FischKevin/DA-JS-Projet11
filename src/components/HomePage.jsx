import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Gallery from './Gallery';
import Footer from './Footer';

function HomePage() {
  return (
    <>
      <Header />
      <Banner image="/top_img.png" text="Chez vous, partout et ailleurs" />
      <Gallery />
      <Footer />
    </>
  );
}

export default HomePage;
