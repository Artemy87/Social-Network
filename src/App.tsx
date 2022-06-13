import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css'
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

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