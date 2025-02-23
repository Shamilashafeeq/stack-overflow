import React , {useState} from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import  Avatar  from '../../components/Avatar/Avatar'
import { useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen }  from '@fortawesome/free-solid-svg-icons'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'

const UserProfile = () => {

    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    console.log(currentProfile)

    const [Switch , setSwitch] = useState(false)
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
            <section>
                <div className='user-details-container'>
                    <div className='user-details'>
                        <Avatar backgroundColor="purple" color="white" px="40px" py="30px" fontSize='50px'>
                            {
                                currentProfile?.name.charAt(0).toUpperCase()
                            }
                        </Avatar>
                        <div className='user-name'>
                            <h1>{currentProfile.name}</h1>
                            <p><FontAwesomeIcon icon={faBirthdayCake}/> joined on {moment(currentProfile?.joinedOn).fromNow()}</p>
                        </div>
                    </div>
                    {
                        currentUser?.result._id === id  && (
                            <button type='button' onClick={() =>setSwitch(true)} className='edit-profile-btn'>
                                <FontAwesomeIcon icon={faPen}/> Edit profile
                            </button>
                        )
                    }
                </div>
                <>
                {
                    Switch ? (
                        <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                    ) :
                    (
                        <ProfileBio currentProfile={currentProfile}/>
                    )
                }
                </>
            </section>
        </div>
    
    </div>
  )
}

export default UserProfile