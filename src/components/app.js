import React, { Component } from 'react';
import UserInterface from './userinterface';


class App extends Component {
  render() {
    return (
      <div>
        <h1 id="title">Decision Maker</h1>
        <UserInterface />
      </div>
    );
  }
}


export default App;