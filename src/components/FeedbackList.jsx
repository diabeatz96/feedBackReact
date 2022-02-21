import React from 'react';
import Feedbackitem from "./Feedbackitem";
import PropTypes from "prop-types";
import {motion, AnimatePresence} from 'framer-motion'


function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0) {
        return <p>No Feed Back Yet</p>
    }

    console.log(feedback)

    return (
        <div className='feedback-list'>
            <AnimatePresence>
         {feedback.map((item) => (
                <motion.div key={item.id}
                initial = {{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}>
                 <Feedbackitem key = {item.id} item = {item}
                handleDelete = {handleDelete}/>
                </motion.div>
         ))}
            </AnimatePresence>
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.array
}

export default FeedbackList;

