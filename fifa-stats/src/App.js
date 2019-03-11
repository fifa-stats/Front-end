import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import PlayerView from './components/PlayerView/PlayerView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>FIFA '19 Stats</h1>
        </header>
        <Route path="/player/:id" component={PlayerView} />
      </div>
    );
  }
}

export default App;
