import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.svg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClassName='active'>
                <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div><p>PUBLIC</p></div>
                <NavLink to='/Questions' className='side-nav-links' activeClassName='active'>
                    <img src={Globe} alt='globe' />
                    <p style={{paddingLeft:'10px'}}> Questions</p>
                </NavLink>
                <NavLink to='/tags' className='side-nav-links' activeClassName='active'>
                    <p style={{paddingLeft:'40PX'}}>Tags</p>
                </NavLink>
                <NavLink to='/users' className='side-nav-links' activeClassName='active'>
                    <p style={{paddingLeft:'40px'}}>Users</p>
                </NavLink>
                

            </div>

        </nav>
  </div>
  )
}

export default LeftSidebar