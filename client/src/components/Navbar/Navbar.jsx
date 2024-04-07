import React ,{useEffect} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import {jwtDecode as decode} from 'jwt-decode'

import { setCurrentUser } from '../../actions/currentUser'
import logo from '../../assets/logo.png'
import Search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'

export const Navbar = () => {
    var User = useSelector((state) =>(state.currentUserReducer))
    const navigate = useNavigate()

    const handleLogout = () =>{
        dispatch({ type: 'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }
   
    const dispatch = useDispatch()
    useEffect(() =>{
        const token = User?.token
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])
  
  return (
    <nav className='nav-main'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo'/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type='text' placeholder='Search....'/>
                
                <img src={Search} alt='search' className='icon' width='18'/>
              
            </form>
            { User === null ?
             <Link to='/Auth' className='nav-item nav-links '>Log in </Link>:
             <>
            <Link to={`/Users/${User?.result?._id}`} style={{textDecoration:'none'}}><Avatar backgroundColor='#009dff' px='10px'  py='7px' borderRadius='50%' color='white'>{User.result.name.charAt(0).toUpperCase()}</Avatar></Link>
            <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
            </>

            }


        </div>
    </nav>
  )
}
export default Navbar ;