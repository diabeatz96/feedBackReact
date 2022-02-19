import {useState} from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {

    const[feedback, setFeedback] =  useState(FeedbackData);



    return (
        <>
        <Header />
            <div className="container">
              <FeedbackList feedback = {feedback}/>
            </div>

        </>

    )
}




export default App;


/*

 const title = 'Blog Post';
    const body = 'This is my blog post';
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'},
        {id: 4, text: 'Comment four'}, ]

    const loading = false;
    const showComments = true;

    const commentBlock = (
        <div className='comments'>
            <h3> Comments ({comments.length}) </h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>
    );

    if (loading) return <h1>Loading...</h1>;

    return (
        <div className = 'container'>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

            {showComments && commentBlock};


        </div> // THIS IS AN EMPTY FRAGMENT

 */