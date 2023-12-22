import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '../assets/chevron-left-solid.svg';
import ChevronRightIcon from '../assets/chevron-right-solid.svg';

function Slideshow({ logement }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : logement.pictures.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < logement.pictures.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className='slideshowContainer'>
      <img src={logement.pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} className='slideshowImg'/>
      {logement.pictures.length > 1 && (
        <>
          <button onClick={goToPrevious} className="image-nav-button prev-button">
            <img src={ChevronLeftIcon} alt="Previous" />
          </button>
          <button onClick={goToNext} className="image-nav-button next-button">
            <img src={ChevronRightIcon} alt="Next" />
          </button>
          <div className="slideshowPagination">
            {currentIndex + 1} / {logement.pictures.length}
          </div>
        </>
      )}
    </div>
  )
}

Slideshow.propTypes = {
  logement: PropTypes.shape({
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};


export default Slideshow;
