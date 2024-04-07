import React from 'react'
import {Routes , Route} from "react-router-dom"
import Auth from './pages/Auth/Auth'
import Home  from './pages/Home/Home'
import Questions from './pages/Questions/Questions'
import Askquestion from './pages/Askquestion/Askquestion'
import DisplayQuestions from './pages/Questions/DisplayQuestions'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'

const Allroutes = () => {
  return (
   <Routes>
      
       <Route path='/Auth' element={<Auth />} />
       
       <Route path='/'  element={<Home />} />
       <Route path='/Questions' element={<Questions />}/>
       <Route path='/Askquestion' element={ <Askquestion />  }/>
       <Route path='/Questions/:id' element={ <DisplayQuestions /> } />
       <Route path='/Tags' element= { <Tags/>} />
       <Route path='/Users' element={ <Users/>}/>
       <Route path='/Users/:id' element= { <UserProfile/>} />
   </Routes>
  )
}

export default Allroutes