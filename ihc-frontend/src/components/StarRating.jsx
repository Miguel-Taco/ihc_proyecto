import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/StarRating.css';

const StarRating = ({ initialRating = 0, onRate, readOnly = false }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const handleClick = (value) => {
        if (!readOnly) {
            setRating(value);
            if (onRate) {
                onRate(value);
            }
        }
    };

    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="star"
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        size="lg"
                        onMouseEnter={() => !readOnly && setHover(ratingValue)}
                        onMouseLeave={() => !readOnly && setHover(0)}
                        onClick={() => handleClick(ratingValue)}
                        style={{ cursor: readOnly ? 'default' : 'pointer' }}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
