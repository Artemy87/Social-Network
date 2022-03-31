import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import state from './Redux/state';


ReactDOM.render(
    <App
        state={state}
        // dialogsPage={ state.dialogsPage }
        // profilePage={ state.profilePage }
        // sidebar={state.sidebar}
    />,
    document.getElementById('root')
);