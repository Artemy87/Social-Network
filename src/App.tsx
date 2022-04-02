import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'

import { Navbar } from './Navbar/Navbar';
import { Profile } from './Profile/Profile';
import { Header } from './Header/Header';
import { Dialogs } from './Dialogs/Dialogs';
import { News } from './News/News';
import { Music } from './Music/Music';
import { Settings } from './Settings/Settings';
import {RootStateType} from "./Redux/state";

type StateType = {
    state: RootStateType
    addPost:(postMessage:string) => void
}

const App = (props:StateType) => {
    return (
        <BrowserRouter>
            <div className='grid-wrap'>
                <div className='grid-area'>
                    <header className='header'>
                        <Header/>
                    </header>
                    <nav className='navbar'>
                        <Navbar sidebar={props.state.sidebar} />
                    </nav>
                    <div className='content'>
                        <Switch>
                            <Route exact path='/profile' render={() => <Profile addPost={props.addPost} profilePage={ props.state.profilePage }/>} />
                            <Route path='/dialogs' render={() => <Dialogs dialogsPage={ props.state.dialogsPage }/> } />
                            <Route path='/news' render={() => <News />} />
                            <Route path='/music' render={() => <Music />} />
                            <Route path='/settings' render={() => <Settings />} />
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;