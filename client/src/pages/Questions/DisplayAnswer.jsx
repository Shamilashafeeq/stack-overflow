import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector ,useDispatch } from 'react-redux'
import { deleteAnswer } from '../../actions/Questions'

import moment from 'moment'
import { Link ,useParams } from 'react-router-dom'


const DisplayAnswer = ({question , handleShare}) => {

  const User = useSelector((state)=> (state.currentUserReducer)) ;
  const { id } = useParams() ;
  const dispatch = useDispatch()
  const handleDelete = (answerId , noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
  }
    return (
    <div>
        {
            question.answer.map((ans) =>(
                <div className='display-ans' key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className='ans-user-handle'>
                      <div>
                        <button  type='submit' onClick={handleShare}>Share</button>
                        {
                              User.result._id === ans?.userId && (
                                 <button type='button' onClick={()=> handleDelete(ans._id , question.noOfAnswers)}>Delete</button>
                              )
                        }
                      </div>
                    
                      <div className='user-asked'>
                         <p>answered {moment(ans.answeredOn).fromNow()}</p>
                        <Link to={`/Users/${ans.userId}`} className='user-links'>
                       <Avatar backgroundColor="GREEN" px="8px" py='5px' borderRadius='3px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                         <div style={{color:"#009dff"}}>
                            {ans.userAnswered}
                         </div>
                       </Link>
                    </div>
                    </div> 
                </div>
            
            )
            )
        }
    </div>
  )
}

export default DisplayAnswer