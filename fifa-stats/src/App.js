import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <header className="App-header">
          <Route path="/" component={Login}/>
          {/* <PrivateRoute exact path="/user" component={}/> */}
        </header>
      </Router>
    );
  }
}

export default App;
