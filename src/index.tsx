import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { store } from './Redux/store';


let rerenderTree = () => {
    ReactDOM.render(
        <App store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    )
}

store.subscribe(rerenderTree)
rerenderTree();

// store.subscribe(rerenderEntireTree);