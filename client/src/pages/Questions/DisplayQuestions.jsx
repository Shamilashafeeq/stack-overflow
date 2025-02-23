import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'
import '../../App.css'

const DisplayQuestions = () => {
  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2'>
            <RightSidebar />
            <QuestionDetails />
            
        </div>
    </div>
  )
}

export default DisplayQuestions