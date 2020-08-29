import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
      </switch>
    </BrowserRouter>
  );
}

const StyledMain = styled.div`

`

export default App;
