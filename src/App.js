import React, { Component } from 'react';
import './App.css';
import getGifs from './services/api-helpers';
import KittenList from './components/KittenList';
import KittenListItem from './components/KittenListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      kittenData: []
    }
  }

  async componentDidMount() {
    try {
      const kittens = await getGifs();
      console.log(kittens.data.data);
      this.setState({
        message: 'Banana Cat Giferizer',
        kittenData: kittens.data.data
      });
    }
    catch(error) {
      console.error(error)
    };
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <KittenList kittenData={this.state.kittenData} />
      </div>
    );
  }
}

export default App;
