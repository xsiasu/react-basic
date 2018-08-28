import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './component/TodoApp';
import Clicker from './component/Clicker';
import MessageHello from './component/MessageHello';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number : ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
        number : e.target.value
    })
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
        <div>
        <div>{this.state.number}</div>
        <input 
          type="text" 
          value={this.state.number}
          onChange= {this.handleChange}/>
        </div>
        <MessageHello />
        <Clicker />
        <TodoApp />
      </div>
    );
  }
}


App.defaultProps = {
  number: '123'
}

export default App;
