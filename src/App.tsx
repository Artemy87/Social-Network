import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css'
import {Profile} from './Profile/Profile';
import {Header} from './Header/Header';
import {News} from './News/News';
import {Music} from './Music/Music';
import {Settings} from './Settings/Settings';
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {NavbarContainer} from "./Navbar/NavbarContainer";
import {UsersContainer} from "./Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='grid-wrap'>
                <div className='grid-area'>
                    <header className='header'>
                        <Header/>
                    </header>
                    <nav className='navbar'>
                        <NavbarContainer />
                    </nav>
                    <div className='content'>
                        <Switch>
                            <Route exact path='/profile' render={() =>
                                <Profile />
                            }/>
                            <Route path='/dialogs' render={() =>
                                <DialogsContainer />
                            }/>
                            <Route path='/users' render={() => <UsersContainer />}/>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;