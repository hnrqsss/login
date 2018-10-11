import { UserController } from '../../../../controllers/UserController'
export const requestLogin = () => {
    return {
        type: 'REQUEST_LOGIN'
    }
}

export const getEmail = (element) => {
    return {
        type: 'GET_EMAIL',
        email: element.target.value
    }
}

export const getPassword = (element) => {
    return {
        type: 'GET_PASSWORD',
        password: element.target.value
    }
}

export const login = (user) => {
    return dispatch => {
        dispatch(requestLogin)
            UserController
                .getAll()
                    .then(({status,data}) => {
                        if(status) {
                            const founded = data.filter(item => item.email === user.email && item.password === user.password )
                            
                            if(founded.length > 0) {
                                
                                sessionStorage.setItem('user',JSON.stringify(founded[0]))
                                dispatch(loginSuccess())
                                return
                            }

                            alert('Usuário e/ou senha inválido')
                            return
                        }   
                    }).catch(() => dispatch(loginError()))
    }
}

const loginSuccess = () => {
    return {
        type: 'LOGIN_SUCCESS'
    }
}


const loginError = () => {
    return {
        type: 'LOGIN_ERROR'
    }
}