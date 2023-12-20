import React from 'react';
import PropTypes from 'prop-types';
import '../sass/components/_banner.scss';

function Banner({ image, text }) {
  return (
    <div className="BannerImage" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="BannerText">{text}</h1>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;
