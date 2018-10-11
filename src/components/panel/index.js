import React from 'react'
import { Redirect } from 'react-router-dom'

const Panel = props => {
    return(
        <div>
            {sessionStorage.user === undefined && <Redirect to='/' />}
            <h1>Teste</h1>
        </div>
        
    )
}

export default Panel