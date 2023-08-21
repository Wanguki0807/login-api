import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from '../pages/Auth/SignUp';
import SendEmail from "../pages/Auth/SendEmail.js";
import Start from "../pages/Auth/Start";
import FirstInfo from "../pages/Auth/FirstInfos";
import SocialHandle from "../pages/Auth/SocialHandle";
import SecondInfo from "../pages/Auth/SecondInfo";


function MyApp() {
    return (
        <Routes>
            <Route exact path="/" element={<SignUp /> } />
            <Route path="/SendEmail" element={<SendEmail /> } />
            <Route path="/Start" element={<Start /> } />
            <Route path="/FirstInfo" element={<FirstInfo /> } />
            <Route path="/SecondInfo" element={<SecondInfo /> } />
            <Route path="/SocialHandle" element={<SocialHandle /> } />
            <Route path="/verify-email" element={<Start /> } />
        </Routes>
    );
}
export default MyApp;
if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>
            , document.getElementById('app'));
}

