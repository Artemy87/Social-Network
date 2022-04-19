import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import './index.css';
import App from './App';
import {store} from "./Redux/redux-store";

let rerenderTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
}

store.subscribe(rerenderTree)
rerenderTree();
