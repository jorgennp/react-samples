import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Legg til verdier i en tabell</h2>
        </div>
        <Table columns={4} headers={["A", "B", "C", "D"]}/>
      </div>
    );
  }
}

export default App;
