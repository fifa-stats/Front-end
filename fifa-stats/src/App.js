import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>FIFA '19 Stats</h1>
          <Login/>
        </header>
      </div>
    );
  }
}

export default App;
