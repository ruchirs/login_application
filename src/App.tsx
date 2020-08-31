import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Submission from './pages/Submission'


function App() {
  let isLoggedIn = localStorage.getItem('userInfo')
  return (
    <BrowserRouter>
      <switch>
        <Route exact path='/' render={() => (isLoggedIn) ? <Redirect to="/dashboard" /> : <Redirect to="/login" /> } />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/submission' component={Submission} />
      </switch>
    </BrowserRouter>
  );
}

export default App;
