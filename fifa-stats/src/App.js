import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <header className="App-header">
          <Login/>
        </header>
      </Router>
    );
  }
}

export default App;
