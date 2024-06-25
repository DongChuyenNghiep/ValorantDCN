import React from 'react';
import '../css/signup.css';
import {Link} from 'react-router-dom'
export default function SignUp (){
    return(
        <>
        <h1 style={{marginTop:'200px'}} className='text-3xl text-center font-semibold'>Sign Up</h1>
        <form className='signup'>
            <input type='text' placeholder='Username' id='username' className='username' />
            <input type='text' placeholder='Email' id='email' className='email' />
            <input type='text' placeholder='Password' id='password' className='password' />
            <button className = "signup-confirm">Sign Up</button>
        </form>
        <div className='haveaccount'>
            <p>Have an account?</p>
            <Link to='/signin'><span>Sign in</span></Link>
            
        </div>
        </>
    )
}