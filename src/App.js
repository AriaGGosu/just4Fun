import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      hola: "hello world"
    }
    
  }  
  render(){
    const { hola } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           { hola }
          </p>
        </header>
      </div>
    );
  }
}

export default App;
