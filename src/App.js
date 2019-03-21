import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./component/NavBar";
import Register from "./component/Register"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Register/>
      </div>
    );
  }
}

export default App;
