import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [],
      text : '',
      phone :''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);      
  }

  render() {
    return(
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label htmlFor="new-todo">What needs to bo done?</label>
          </div>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
            name="text"
          />
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.phone}
            name="phone"
          />          
          <button>
            Add #{this.state.items.length +1}
          </button>
        </form>
      </div>
    
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    //입력되지 않을경우 리턴
    if(!this.state.text.length) {
      return alert('입력해주세요');
    }

    const newItem = {
      text : this.state.text,
      phone : this.state.phone,
      id :Date.now()
    }
    // setState 변화된 값
    this.setState((prevState) =>({
      items : prevState.items.concat(newItem),
      text : '',
      phone :''
    }))
  }

  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
}

class TodoList extends Component {
  render() {
    return(
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}{item.phone}</li>
        ))}
      </ul>
    )
  }
}

export default TodoApp;