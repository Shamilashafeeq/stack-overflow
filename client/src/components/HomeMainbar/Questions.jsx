import React from 'react'
import { Link } from 'react-router-dom'
import moment from  'moment'

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
        <div className='display-ans-votes' >
            <p>{question.upVote?.length - question?.downVote?.length}</p>
            <p>Votes</p>
        </div>
        <div className='display-ans-votes' >
            <p>{question.noOfAnswers}</p>
            <p>answers</p>
        </div>
        <div className='display-question-detail'>
                <Link to={`/Questions/${question._id}`} className='display-title-links'>{question.questionTitle}</Link>
        
        <div className='display-tag-time'>
            <div className='display-tag'>
                {
                    question.questionTags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
       
            <div className='display-time'>
                <p>asked {moment(question.askedOn).fromNow()} {question.userPosted}</p>
            
           </div>
        </div>
        </div>
    </div>
  )
}

export default Questions