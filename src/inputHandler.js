import React from 'react'; 
import App from './App';
import './App.css';

export default class inputHandler extends React.Component {
    constructor(props)
    {
      super(props)
  
      this.state=
      {
        firstName: " ",
        lastName: " ",
        Address: " ",
        Birthdate: " "
      }
    }
    render() {
      return 
    }
    onChange = (event) => 
    {
      App.setState
        ({
            firstName: event.target.value,
            lastName: event.target.value,
            Address: event.target.value, 
            Birthdate: event.target.value
        })
    } 
  }