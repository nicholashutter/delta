import React, { Component } from 'react';
import CustomerForm from './CustomerForm';

class State extends Component {
    constructor(props)
    {
      super(props)
  
      this.state=
      {
        State: ''
      }
    }
    render() {
        return (
            <div>
                <label>
                State:
                </label>
                <input type="text" value={this.state.State} onChange={this.StateChange}/>
                <br></br>
            </div>
        );
    }
    StateChange = (event) => 
    {
      this.setState
        ({
            State: event.target.value
        })
    }
}

export default State;