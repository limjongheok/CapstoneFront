import React from "react";

import { Route, Routes } from "react-router-dom"; 
import MainPage from "./pages/mainPage/MainPage";  
import SigninPage from "./pages/loginPage/js/SinginPage";
import EmailauthrequPage from "./pages/EmailAuthPage/js/EmailAuthrequPage";
import EmailAuthnumPage from "./pages/EmailAuthNumPage/js/EmailAuthnumPage";
import SignupPage from "./pages/signUpPage/js/SignupPage";


function UserRouter(){

    const token = localStorage.getItem("ACCESS_TOKEN")
    console.log(token)
    if(token == ""){
        console.log(token)
    }

    return(
    <Routes>
       <Route path="/" element={token !== "" ? <SigninPage/> : <MainPage/>}/> 
       {/* 토큰이 null 이나니면 Mainpage route 토큰이 null 일시 LoginPage 로 route */}
       <Route path="/email/auth" element = {<EmailauthrequPage/>}/>
       <Route path="/email/auth/check" element = {<EmailAuthnumPage/>}/>
       <Route path="/signup" element = {<SignupPage/>}/>
    
        
    </Routes>
    );
}
export default UserRouter;