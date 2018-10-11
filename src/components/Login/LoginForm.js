import React from 'react'
import { connect } from 'react-redux'
import { getEmail, getPassword,login } from './redux/actions/actions'
import { Redirect } from 'react-router-dom'
const LoginForm = props => {
    
    const image = '/images/logo-defesa-civil.jpg'
    const user = {email: props.email, password: props.password }

    const submitForm = (form) => {
        form.preventDefault()
        props.login(user)
    }

    return (
        <div>
            
            {props.isLogged && <Redirect to='/painel' />}
        
            <form className='wrapper-login' onSubmit={submitForm}>
                    <div className='login-content'>
                        <div className='image-content'>
                            <img src={image} alt='logo defesa civil' />
                        </div>
                        <input type='email' required placeholder='Email' name='username' onInput={props.getEmail} />
                        <input type='password' required placeholder='Senha' name='password' onInput={props.getPassword}/>
                        <button type='submit' className='btn-login' name='login'>Login</button>
                    </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmail:    (element) => dispatch(getEmail(element)),
        getPassword: (element) => dispatch(getPassword(element)),
        login:       (user)    => dispatch(login(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)