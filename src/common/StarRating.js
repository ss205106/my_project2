import React, { useState } from 'react';
import "../css/Star.css"
const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);

    const handleClick = (ratingValue) => {
        setRating(ratingValue);
      };
    return (
        <div className="star-rating">
        {[...Array(totalStars)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <span
              key={index}
              className={`star ${ratingValue <= rating ? 'filled' : ''}`}
              onClick={() => handleClick(ratingValue)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    );
};

export default StarRating;