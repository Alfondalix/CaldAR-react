import React, { Component } from 'react';
import './App.css';
import Aside from './components/aside/Aside';
import Nav from './components/nav/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Aside />
      </div>
    );
  }
}

export default App;
