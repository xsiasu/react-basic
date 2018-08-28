import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : props.count
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
        this.setState({count : 0});
    }
    
    render() {
        return(
            <div>
                <span className="d-block border border-primary">{this.state.count}</span>
                <div className="btn-group">
                <button className="btn btn-primary" onClick= {this.incrementCount}>+</button>
                <button className="btn btn-success" onClick= {this.resetCount}>reset</button>
                <button className="btn btn-primary" onClick= {this.decrementCount}>-</button>            
                </div>
            </div>
        )
    }
}

Clicker.defaultProps = {
    count:0,
    
}

export default Clicker;
