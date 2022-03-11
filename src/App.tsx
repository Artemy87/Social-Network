import React from 'react';
import './App.css'

const App = () => {
    return (
        <div className='grid-wrap'>
            <header className='header'>
                {/*<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBAq8gSI8UYfdWiomqzJBnq9zhTJtF1_LJA&usqp=CAU" alt=""/>*/}
                <div className='logo'></div>
            </header>
            <div className='app-body'>
                <div className='navbar'>
                    <div><a href="">Profile</a></div>
                    <div><a href="">Messages</a></div>
                    <div><a href="">News</a></div>
                    <div><a href="">Music</a></div>
                    <div><a href="">Settings</a></div>

                </div>
                <div className='main-content'>
                    <div>
                        <img src="" alt="avatarka"/>
                    </div>
                    <div>
                        ava + description
                    </div>
                    <div>
                        My post
                        <div>
                            New Post
                        </div>
                        <div>
                            <div>Post 1</div>
                            <div>Post 2</div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<footer className='footer'>footer</footer>*/}
        </div>
    );
}

export default App;