// Code MovieReviews Here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Review = ({ title, img_url }) => {
  return (
    <div className="review">
      <img src={img_url} />
      <h3>{title}</h3>
    </div>
  )
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review) => <Review title={review.display_title} img_url={review.multimedia.src} />)}
  </div>
);

MovieReviews.defaultProps = {
  reviews: PropTypes.shape({
    img_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
}




export default MovieReviews
