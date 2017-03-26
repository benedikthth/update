import React, { Component } from 'react';
import './App.css';
import image from './profile.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={image} className="App-profile" alt="logo" />
          <h2>Welcome to Spock.is</h2>
          <h3>This is Work in progress</h3>

        </div>
      </div>
    );
  }
}

export default App;
