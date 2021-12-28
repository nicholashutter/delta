import React, { Component } from 'react';
import CustomerForm from './CustomerForm';


class Birthdate extends Component {
    constructor(props)
    {
      super(props)
  
      this.state=
      {
        Birthdate: ''
      }
    }
    render() {
        return (
            <div>
                <label>
                Birthdate (xx/xx/xxxx):
                </label>
                <input type="text" value={this.state.Birthdate} onChange={this.BirthdateChange}/>
                <br></br>
            </div>
        );
    }
    BirthdateChange = (event) => 
    {
      this.setState
        ({
            Birthdate: event.target.value
        })
    }
}

export default Birthdate;