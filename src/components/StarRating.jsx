import React from 'react';
import PropTypes from 'prop-types';
import redStar from '../assets/star-solid-red.svg';
import greyStar from '../assets/star-solid-grey.svg';

function RatingStars({ rating }) {
  const totalStars = 5;
  return (
    <div className="rating">
      {/* Creating an array of 5 elements and mapping over them to display stars */}
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

// PropTypes to ensure the rating prop is a number and is required
RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingStars;
