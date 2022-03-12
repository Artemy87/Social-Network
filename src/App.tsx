import React from 'react';
import './App.css'
import {Navbar} from "./Navbar";
import {Profile} from "./Profile";
import {Header} from "./Header";

const App = () => {
    return (
        <div className='grid-wrap'>
            <Header />
            <div className='app-body'>
                <Navbar />
                <Profile />
            </div>
        </div>
    );
}

export default App;