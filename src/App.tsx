import React from 'react';
import './App.css';
import {Technologies} from "./Header/Technologies";
import {Header} from "./Technologies/Header";
import {Footer} from "./Footer/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <Technologies />
            <Footer />
        </div>
    );
}

export default App;