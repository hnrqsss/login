import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Login from './components/Login'

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
