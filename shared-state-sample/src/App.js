import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter'
import UpDown from './components/UpDown';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.state = {number: 0}
  }

  handleNumberChange(value) {
    this.setState((state, props) => ({number: state.number + value}));
  }


  render() {
    const number = this.state.number;
    return (
      <div className="App">
        <div className="App-header">
          <h1>Eksempel - Oppdatere felles state</h1>
        </div>
        <div>
          <Counter number={number}/>
          <UpDown number={number} onChange={this.handleNumberChange}/>
        </div>
      </div>
    );
  }
}

export default App;
