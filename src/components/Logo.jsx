import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Logo({ color = 'red' }) {
  const logoSrc = color === 'white' ? '/LOGOfooter.png' : '/LOGO.png';

  return (
    <Link to="/">
      <img
        src={logoSrc}
        alt="Logo du site Kasa"
        className={`logo logo-${color}`}
      />
    </Link>
  );
}

Logo.propTypes = {
  color: PropTypes.oneOf(['red', 'white']),
};

export default Logo;
