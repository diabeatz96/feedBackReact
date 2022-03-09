import React from 'react';
import Card from "../shared/Card";
import PropTypes from "prop-types";
import {useState} from "react";
import {FaTimes} from 'react-icons/fa';
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

const MyComponent = ({item }) => {
    const {deleteFeedback} = useContext(FeedbackContext);

    return (
        <Card>
            <div className='num-display'> {item.rating} </div>
            <button onClick= {() => deleteFeedback(item.id)} className="close"><FaTimes color = 'purple'/></button>
            <div className="text-display">{item.text} </div>
        </Card>
    );
};


MyComponent.propTypes = {
    item: PropTypes.object.isRequired
}
export default MyComponent;

