import React, { Component } from 'react';
import './App.css';
import getGifs from './services/service-worker';
import KittenList from './components/KittenList';
import KittenListItem from './components/KittenListItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Friends, I am an app component</h1>
        <KittenList />
        <KittenListItem />
      </div>
    );
  }
}

export default App;
