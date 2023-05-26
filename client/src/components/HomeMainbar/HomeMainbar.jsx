import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionsList'
const HomeMainbar = () => {
  const location=useLocation();
  const user=1;
  const navigate=useNavigate();

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };
  var questionsList=[{
    _id:1,
    upVotes:3,
    downVotes:2,
    noOfAnswers:2,
    questionTitle:"what is a function?",
    questionBody:"It mean to be",
    questionTags:["java","node js","react js","mongo"],
    userPosted:"Rohith",
    askedOn:"jan 1",
    userId:1,
    answer:[{
      answerBody:"Answer",
      userAnswered:'Gurram',
      answeredOn:"Jan 2",
      userId:2,
    }]
  },{
    _id:2,
    upVotes:3,
    downVotes:2,
    noOfAnswers:0,
    questionTitle:"what is a function?",
    questionBody:"It mean to be",
    questionTags:["javacript","R","python"],
    userPosted:"Rohith",
    askedOn:"jan 1",
    userId:1,
    answer:[{
      answerBody:"Answer",
      userAnswered:'Gurram',
      answeredOn:"Jan 2",
      userId:2,
    }]
  },
  {
    _id:3,
    upVotes:3,
    downVotes:2,
    noOfAnswers:0,
    questionTitle:"what is a function?",
    questionBody:"It mean to be",
    questionTags:["javacript","R","python"],
    userPosted:"Rohith",
    askedOn:"jan 1",
    answer:[{
      answerBody:"Answer",
      userAnswered:'Gurram',
      answeredOn:"Jan 2",
      userId:2,
    }]
  }]

  const redirect = () => {
      alert("login or signup to ask a question")
      navigate('/Auth')
  }
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
        location.pathname === '/' ? <h1>Top Questions</h1> : <h1> All Questions</h1>
        }
        <Link to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</Link>
      </div>
      <div>
        {
          questionsList === null ? <h1> Loading...</h1>:<>
            <p>{questionsList.length} questions</p>
            <QuestionList questionsList={questionsList}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar