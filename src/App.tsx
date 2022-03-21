import React from 'react';
import './App.css'
import {Navbar} from './Navbar/Navbar';
import {Profile} from './Profile/Profile';
import {Header} from './Header/Header';
import {Dialogs} from './Dialogs/Dialogs';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {News} from './News/News';
import {Music} from './Music/Music';
import {Settings} from './Settings/Settings';

export type MessageType = {
    id:number
    message:string
}
export type DialogType = {
    id:number
    name:string
}
export type DialogsPageType = {
    dialogs:DialogType[];
    messages:MessageType[]
}
export type PostsType = {
    id:number
    name:string
    message:string
    time:string
    like:number
}
export type PostsPageType = {
    posts:PostsType[]
}
export type RootStateType = {
    dialogsPage:DialogsPageType
    postsPage:PostsPageType
}

const App = () => {
    let state:RootStateType = {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Inna'},
                {id: 4, name: 'Anna'},
            ],
            messages: [
                {id: 1, message: 'My name is Dima'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo!'},
                {id: 4, message: 'My number +0034024'},
            ]
        },
        postsPage: {
            posts: [
                {id: 1, name: 'A', message: 'Hi! How are you?', time: '8:26', like: 8},
                {id: 2, name: 'B', message: 'My number +231314', time: '3:43', like: 33},
                {id: 3, name: 'C', message: 'My names Victor', time: '09:10', like: 15},
            ]
        }
    }

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
                            <Route exact path='/profile' render={() => <Profile postsPage={state.postsPage}/>} />
                            <Route path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage}/> } />
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