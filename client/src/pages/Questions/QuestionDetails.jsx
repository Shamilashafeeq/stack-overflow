import React , {useState} from 'react'
import { useParams ,Link ,useNavigate , useLocation} from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux' 
import moment from 'moment'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import Avatar from '../../components/Avatar/Avatar'
import "./Questions.css"
import DisplayAnswer from './DisplayAnswer'
import { postAnswer , deleteQuestion ,voteQuestion} from '../../actions/Questions'

import copy from 'copy-to-clipboard'



const QuestionDetails = () => {
   
    const { id } = useParams() ;
    const questionsList = useSelector((state) => (state.questionsReducer))
   

  
    
//     var questionsList = [{
//     _id: '1',
//     upVotes:3,
//     downVotes:2,
//     noOfAnswers:2,
//     questionTitle:"What is a function?",
//     questionBody:"It is meant to be",
//     questionTags:["java","node js","react js" ,"mongo db"],
//     userPosted:"mano",
//     userId:1,
//     askedOn:"jan 1",
//     answer:[{
//        answerBody:"Answer",
//        userAnswered:'kumar',
//        answeredOn:"jan 2",
//        userId:2,
//     }]

//  },{
//    _id: '2',
//    upVotes:0,
//    downVotes: 1,
//    noOfAnswers:0,
//    questionTitle:"What is a function?",
//    questionBody:"It is meant to be",
//    questionTags:["javascript","R","python" ],
//    userPosted:"mano",
//    userId:2,
//    askedOn:"jan 1" ,
//    answer:[{
//     answerBody:"Answer",
//     userAnswered:'kumar',
//     answeredOn:"jan 2",
//     userId:2,
//  }]
// },{
//  _id: '3',
//  upVotes:1,
//  downVotes:2,
//  noOfAnswers:2,
//  questionTitle:"What is a function?",
//  questionBody:"It is meant to be",
//  questionTags:["java","node js","react js" ],
//  userPosted:"mano",
//  userId:3,
//  askedOn:"jan 1" ,
//  answer:[{
//     answerBody:"Answer",
//     userAnswered:'kumar',
//     answeredOn:"jan 2",
//     userId:2,
//  }]
// }]
 
  const [ Answer , setAnswer] = useState(' ')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const User = useSelector((state)=> (state.currentUserReducer))
  const location = useLocation()
  const url = "http://localhost:3000"
  
  const handlePostAns =( e ,answerLength)=> {
   e.preventDefault()
  if(User === null){
    alert("login or signup to post answer")
    navigate('/Auth')
  }else{
    if(Answer === ' '){
      alert('enter a answer before submitting')
    }else{
      dispatch(postAnswer({ id , noOfAnswers: answerLength + 1, answerBody:Answer, userAnswered: User.result.name , userId:User.result._id}))
    }
  }
}

  const handleShare = () =>{
     copy(url+location.pathname)
     alert('copied url:'+url+location.pathname)
  }

  const handleDelete = () =>{
   dispatch(deleteQuestion(id,navigate))
  }

  const handleUpVote = ()=>{
     dispatch(voteQuestion(id, 'upVote', User.result._id))
  }

  const handleDownVote = () => {
   dispatch(voteQuestion(id, 'downVote' , User.result._id))
  }

  return (
    <div className='question-details-page'>
      {
         questionsList.data === null ?
         <h1>Loading...</h1>:
         <>
          {
            questionsList.data.filter(question => question._id === id).map(question => (
               <div key={question._id}>        
                <section className='question-details-container'>
                  <h1>{question.questionTitle}</h1>
                  <div className='question-details-container-2'>
                     <div className='question-votes'>
                        <img src={upvote} alt="" width='18' className='vote-icon' onClick={handleUpVote}/>
                        <p>{question.upVote?.length - question?.downVote?.length }</p>
                        <img src={downvote} alt='' width='18' className='vote-icon' onClick={handleDownVote}/>
                     </div>
                     <div className='questions-body' style={{width:"100%"}}>
                        {question.questionBody}
                       <div className='question-tags'>
                        {
                           question.questionTags.map((tag) => (
                              <p key={tag}> {tag } </p> 
                           )
                              )
                        }
                     
                   </div>
                        <div className='question-user-handle'>
                          <div>
                          <button type='button' onClick={handleShare}>Share</button>
                          {
                              User.result._id === question?.userId && (
                                 <button type='button' onClick={handleDelete}>Delete</button>
                              )
                          }
                          
                          </div> 
                        </div>
                   </div>
                   <div className='user-asked' >
                     <p>asked {moment(question.askedOn).fromNow()}</p>
                       <Link to={`/Users/${question.userId}`} className='user-links'>
                       <Avatar backgroundColor="orange" px="8px" py='5px' borderRadius='3px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                       <div style={{color:"#009dff"}}>
                        {question.userPosted}
                       </div>
                       </Link>
                     </div>
                  </div>
                </section>
                     {
                        question.noOfAnswers !== 0 && (
                           <section >
                              <h3>{question.noOfAnswers} Answers</h3>
                              <DisplayAnswer key={question._id} question = {question} handleShare={handleShare}/>
                           </section>

                        )
                     }
                     <section className='post-ans-container'>
                        <h3>Your Answer</h3>
                        <form onSubmit={ (e) => { handlePostAns(e, question.answer.length)}} >
                           <textarea name="" id="" cols="30" rows="10" onChange={ e => setAnswer(e.target.value)} ></textarea><br/>
                           <input type="submit" className='ans-submit-btn' value="Post Your Answer" />
                        </form>
                        <p>Browse other questions tagged
                           {
                              question.questionTags.map((tag)=>(
                                 <Link to='/Tags' className='ans-tags' key={tag}> {tag} </Link>
                              )
                              )
                           } or {
                              <Link to='/Askquestion' style={{textDecoration:'none', color:"#009dff"}}>ask your own question</Link>
                           }
                        </p>

                     </section>
                  
                  

               </div>
            ))
          }
         </>
      }
    </div>
  )
}

export default QuestionDetails