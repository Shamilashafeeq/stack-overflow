import React from 'react'
import { useLocation } from 'react-router-dom'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import  UsersList  from './UsersList.jsx'
import './Users.css'

const Users = () => {
   
  const location = useLocation()

  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
            <h2>Users</h2>
              <UsersList/>
          
        </div>
    </div>
  )
}

export default Users