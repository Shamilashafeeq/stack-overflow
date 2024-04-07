import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import './Auth.css'
import {login ,signup} from '../../actions/auth'


const Auth = () => {
    const [isSignup , setSignup ] = useState(false)
    const [name , setName]=useState('')
    const [email , setEmail]=useState('')
    const [password ,setPassword]=useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
       e.preventDefault()
       console.log({name,email,password})
       if(!email && !password){
        alert("Enter email and password")      
       }
       if(isSignup){
          if(!name){
            alert("Enter the name to continue")
          }
          dispatch(signup({ name, email, password}, navigate))
        }else{
          dispatch(login({ email,  password}, navigate))
        }
    }

    const handleSwitch = () =>{
        setSignup(!isSignup)
    }
  return (
     
    <section class='auth-section'>
      {isSignup && <AboutAuth/>}
        <div className='auth-container-2 '>
          {!isSignup && <img src={icon} alt='login-icon' className='login-logo'/>}
          <form onSubmit={handleSubmit}>
            { isSignup &&
               <label htmlFor='name'>
                <h4>Display Name</h4><input type='text' name='name' id='name' onChange={(e)=> {setName(e.target.value)}} />
               </label> 
            }
            <label htmlFor='email'>
                <h4>Email</h4>
                <input type='email'  name='email' id='email' onChange={(e)=> {setEmail(e.target.value)}} />
             </label>
             <label htmlFor='password'>
                <div style={{ display:'flex' ,justifyContent:'space-between'}}>
                <h4>Password</h4>
                { !isSignup && <p style={{fontSize:'13px', color:'#007ac6' }}>Forgot password?</p>}
                </div>
                <input type='password'  name='password' id='password' onChange={(e)=> {setPassword(e.target.value)}} />
                {isSignup && <p style={{fontSize:'13px',color:'#666767'}}>password must contain at least eight <br/>characters, including at least 1 letter and 1 <br/> number.  </p>          
                            
                 } 
             </label>
             {
              isSignup && (
                <label htmlFor='check'>
                  <input type='checkbox'/>
                  <p> Opt-in to recieve occasional <br/> product updates,user research invitations<br/>
                  company announcements, and digests. </p>
                </label>
              )
             }
             <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Log in' }</button>
              { isSignup && <p style={{fontSize:'13px', color:'#666767'}}>By clicking "sign up"you agree to our
              <span style={{fontSize:'13px',color:'#007ac6'}}> terms of<br/> service,privacy policy</span> and  
              <span style={{fontSize:'13px',color:'#007ac6'}}> cookie policy </span> </p> }
          </form>
          <p>
         
         {isSignup? 'Already have an account ?':"Don't have an account? " } 
         <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup?'Log in':'Sign up'}</button>
          </p>
        </div>

    </section>
    
  )
}

export default Auth