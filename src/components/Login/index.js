import React from 'react'
import './style/index.css'
import LoginForm from './LoginForm'

import {    BrowserRouter as Router, 
            Route, 
            Switch,
            Redirect } from 'react-router-dom'

import Panel from '../panel'
// redux imports
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer } from './redux/reducers/reducers'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)


class Login extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={LoginForm} />
                            <Route path='/painel' component={Panel} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        )
    }
}


export default Login