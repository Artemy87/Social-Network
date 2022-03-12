import React from 'react';
import './App.css'
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Header} from "./Header/Header";

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