import React , {useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useNavigate  } from 'react-router-dom'
import './Askquestion.css'
import { askQuestion } from '../../actions/Questions'

const Askquestion = () => {
   
  const [questionTitle , setQuestionTitle] = useState('')
  const [questionBody , setQuestionBody] = useState('')
  const [questionTags , setQuestionTags] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const User =useSelector((state) =>(state.currentUserReducer))

  const handleSubmit =(e)=>{
    e.preventDefault()
   // console.log({questionTitle , questionBody ,questionTags})
    dispatch(askQuestion({questionTitle ,questionBody,questionTags ,userPosted: User.result.name , userId: User?.result._id} ,navigate))
  }

  const handleEnter =(e) =>{
    if(e.key === 'Enter'){
      setQuestionBody(questionBody + '\n')
    }
  }

  return(
   <div className='ask-question'>
      <div className='ask-ques-container'>
        <h1>Ask a public question </h1>
        
          <form onSubmit={handleSubmit}>
          <div className='ask-questn-form'>
            <label htmlFor='questionTitle'>
              <h4>Title</h4>
              <p>Be specific and imagine your asking a question to another person</p>
              <input type='text' id='questionTitle' placeholder='e.g is there an R function for finding the index of an element in a vector? ' onChange={(e)=>{setQuestionTitle(e.target.value)}}/> 
  
            </label>
            <label htmlFor='questionBody'>
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question </p>
              <textarea  id='questionBody' rows="4" cols="50" onChange={(e)=>{setQuestionBody(e.target.value)}} onKeyDown={handleEnter}/>
            </label>
            <label htmlFor='questionTags'>
              <h4>Tags</h4>
              <p>Add upto 5 tags to describe what your question is about</p>
              <input type='text' id='questionTitle' placeholder='e.g (xml typescript wordpress)' onChange={(e)=>{setQuestionTags(e.target.value.split(' '))}}/>
             </label>
             
             </div>
             <input type='submit' value='Review your question' className='ques-btn'/> 
          </form>
        
      </div>
   </div>
  ) 
}

export default Askquestion