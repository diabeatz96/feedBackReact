import React from 'react';
import PropTypes from "prop-types";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
    //Calculate Ratings Avg.
    const { feedback } = useContext(FeedbackContext);

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    console.log(average);

    average = average.toFixed(1)

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats;