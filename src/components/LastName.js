import React, { Component } from 'react';
import CustomerForm from './CustomerForm';

class LastName extends Component {
    constructor(props)
    {
      super(props)
  
      this.state=
      {
        lastName: ''
      }
    }
    render() {
        return (
            <div>
                <label>
                Last Name:
                </label>
                <input type="text" value={this.state.lastName} onChange={this.lastNameChange}/>
                <br></br> 
            </div>
        );
    }
    lastNameChange = (event) => 
    {
      this.setState
        ({
            lastName: event.target.value
        })
    }
}

export default LastName;