import React from 'react'
import './style/index.css'

const Login = props => {
    return (
        <div className='wrapper-login'>
            <div className='login-content'>
                <input type='text' placeholder='username' />
                <input type='password' placeholder='password' />
                <button type='button' className='btn-login'>Login</button>
            </div>
        </div>
    )
}

export default Login