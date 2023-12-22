import React from 'react';
import PropTypes from 'prop-types';
import redStar from '../assets/star-solid-red.svg';
import greyStar from '../assets/star-solid-grey.svg';

function RatingStars({ rating }) {
  const totalStars = 5;
  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, i) => (
        <img
          key={i}
          src={i < rating ? redStar : greyStar}
          alt={i < rating ? 'Red Star' : 'Grey Star'}
          className="star"
        />
      ))}
    </div>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingStars;
