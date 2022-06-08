import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css'
import {News} from './News/News';
import {Music} from './Music/Music';
import {Settings} from './Settings/Settings';
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {NavbarContainer} from "./Navbar/NavbarContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='grid-wrap'>
                <div className='grid-area'>
                    <header className='header'>
                        <HeaderContainer />
                    </header>
                    <nav className='navbar'>
                        <NavbarContainer />
                    </nav>
                    <div className='content'>
                        <Switch>
                            <Route exact path='/profile/:userId?' render={() => <ProfileContainer />}/>
                            <Route path='/dialogs' render={() => <DialogsContainer />}/>
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