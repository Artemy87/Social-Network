import React from 'react';
import './App.css'
import {Navbar} from "./Navbar/Navbar";
import {Profile} from "./Profile/Profile";
import {Header} from "./Header/Header";
import {Dialogs} from "./Profile/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className='grid-wrap'>
                <div className='grid-area'>
                    <header className='header'>
                        <Header/>
                    </header>
                    <nav className='navbar'>
                        <Navbar/>
                    </nav>
                    <div className='content'>
                        <Switch>
                            <Route exact path='/profile' render={() => <Profile/>} />
                            <Route path='/dialogs' render={() => <Dialogs />} />
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