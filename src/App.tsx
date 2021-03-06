import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/Dialogs-container";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

export const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>;
                    <Route path='/profile/*' element={<Profile/>}/>;
                    {/*<Route path='/users/*' element={() => {<div>users</div>}}/>;*/}
                </Routes>
            </div>
        </div>  
    );
}