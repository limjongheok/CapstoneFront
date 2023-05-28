import React from 'react'
import "./App.css"
import UserRouter from './UserRouter'; 

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <TopHeaderNavigator cart={cart}/> */}
      <UserRouter/>
     
    </BrowserRouter>
  );
}

export default App;
