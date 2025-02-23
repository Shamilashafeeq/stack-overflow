import React from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import  './HomeMainbar.css'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()
  

  const questionsList = useSelector((state) => (state.questionsReducer))
  console.log(questionsList)

//   var questionsList = [{
//     _id: 1,
//     upVotes:3,
//     downVotes:2,
//   noOfAnswers:2,
//     questionTitle:"What is a function?",
//     questionBody:"It is meant to be",
//     questionTags:["java","node js","reat js" ,"mongo db"],
//     userPosted:"mano",
//     userId:1,
//     askedOn:"jan 1",
//     answer:[{
//        answerBody:"Answer",
//      userAnswered:'kumar',
//      answeredOn:"jan 2",
//        userId:2,
//     }]

//  },{
//    _id: 2,
//     upVotes:0,
//     noOfAnswers:0,
//     questionTitle:"What is a function?",
//     questionBody:"It is meant to be",
//     questionTags:["javascript","R","python" ],
//     userPosted:"mano",
//     askedOn:"jan 1" 
//  },{
//   _id: 3,
//   upVotes:1,
//   noOfAnswers:2,
//   questionTitle:"What is a function?",
//   questionBody:"It is meant to be",
//   questionTags:["java","node js","reat js" ],
//   userPosted:"mano",
//   askedOn:"jan 1" 
// }]

  

  const rediret =() =>{
    if(user === null) {
      alert('login or sign up to ask question')
      navigate('/Auth')
    }
    else{
      navigate('/Askquestion')
    }
  }

  return (
    <div className='home-mainbar'>
      <div className='main-bar-header'>
        {
            location.pathname === '/' ?<h1>Top Questions</h1> : <h1> All Questions</h1>
        }
        <button className='main-btn'  onClick={rediret}>Ask Question</button>
        
       </div>
      <div>
        {
          questionsList.data === null ?
          <h2>Loading....</h2>:
          <>
          <p>{questionsList.data?.length} questions</p>
           <QuestionsList  questionsList={questionsList.data} />
           </>
         }
      </div>
    </div>
  )
}


export default HomeMainbar