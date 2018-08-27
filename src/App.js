import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : props.count,
      name : '선관'
    }

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  incrementCount() {
    this.setState((prevState) => ({count : prevState.count +1}));
  }

  decrementCount() {
    this.setState((prevState) => ({count : prevState.count -1}));
  }

  resetCount() {
    this.setState((prevState) => ({count : 0}));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <span>{this.state.count}</span>
        <button onClick= {this.resetCount}>reset</button>
        <button onClick= {this.incrementCount}>+</button>
        <button onClick= {this.decrementCount}>-</button>
        <p>hello{this.state.name}</p>


      </div>
    );
  }
}

App.defaultProps = {
  count:0,
  name:'선관'
}

export default App;