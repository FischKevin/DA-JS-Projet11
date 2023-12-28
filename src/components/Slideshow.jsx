import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '../assets/chevron-left-solid.svg';
import ChevronRightIcon from '../assets/chevron-right-solid.svg';

function Slideshow({ logement }) {
  // State to keep track of the current index of the slideshow.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate to the previous image.
  const goToPrevious = () => {
    setCurrentIndex(prevIndex =>
      // Loop back to the last image if currently at the first image.
      prevIndex > 0 ? prevIndex - 1 : logement.pictures.length - 1,
    );
  };

  // Function to navigate to the next image.
  const goToNext = () => {
    setCurrentIndex(prevIndex =>
      // Loop back to the first image if currently at the last image.
      prevIndex < logement.pictures.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <div className="slideshowContainer">
      {/* Displaying the current image based on currentIndex */}
      <img
        src={logement.pictures[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="slideshowImg"
      />
      {/* Conditionally render navigation buttons if there is more than one picture */}
      {logement.pictures.length > 1 && (
        <>
          {/* Button to go to the previous image */}
          <button
            onClick={goToPrevious}
            className="image-nav-button prev-button"
          >
            <img src={ChevronLeftIcon} alt="Previous" />
          </button>
          {/* Button to go to the next image */}
          <button onClick={goToNext} className="image-nav-button next-button">
            <img src={ChevronRightIcon} alt="Next" />
          </button>
          {/* Indicator for the current image position */}
          <div className="slideshowPagination">
            {currentIndex + 1} / {logement.pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

// PropTypes to ensure the logement object has a pictures array.
Slideshow.propTypes = {
  logement: PropTypes.shape({
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Slideshow;
