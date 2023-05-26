import React from 'react'
import "./App.css"
import Grid from '@mui/material/Grid';
import Signin from './pages/Signin.js'
import Signup from './pages/Signup.js';
import Emailauthrequ from './pages/EmailAuthrequ.js';
import Emailauthnum from './pages/EmailAuthnum.js';
import Footer from './headfoot/footer.js';

function App() {
  return (
    <Grid container justifyContent = "center" height="100vh" flexDirection="column">
    {/* <Signin/> */}
    {/* <Signup/> */}
    {/* <Emailauthrequ/> */}
    {/* <Emailauthnum/> */}
    <Footer/>
    </Grid>
  );
}

export default App;
