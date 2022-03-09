import {BrowserRouter as Router, Route, Routes, Link, NavLink} from "react-router-dom";
import Card from "./shared/Card";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {

    return (
        <>
            <FeedbackProvider>
        <Router>
        <Header />
            <div className="container">
                <Routes>
                    <Route path='/*' element = {
                        <>
                            <FeedbackForm />
                            <FeedbackStats/>
                            <FeedbackList />
                        </>
                    }>
                    </Route>

                    <Route path='/about' element = {<AboutPage/>} />
                </Routes>
            </div>


            <AboutIconLink/>

        </Router>
            </FeedbackProvider>
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