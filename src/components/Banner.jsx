import React from 'react';
import PropTypes from 'prop-types';
import '../sass/components/_banner.scss';

function Banner({ image, text }) {
  return (
    // Banner component with a dynamic background image and text.
    <div className="BannerImage" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="BannerText">{text}</h1>
    </div>
  );
}

// Defining propTypes for the Banner component to enforce type checking.
// Ensures 'image' and 'text' props are strings and are required for the component.
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;
