const INITIAL_STATE = {
    isLogging: false,
    isLogged: false,
    email: '',
    password: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    if(action.type === 'GET_EMAIL') {
        return {
            ...state,
            email: action.email
        }
    }

    if(action.type === 'GET_PASSWORD') {
        return {
            ...state,
            password: action.password
        }
    }

    if(action.type === 'LOGIN_SUCCESS') {
        return {
            ...state,
            isLogged: true
        }
    }

    if(action.type === 'LOGIN_ERROR') {
        return {
            ...state,
            isLogging: false,
            isLogged: false,
        }
    }
}

export { reducer }