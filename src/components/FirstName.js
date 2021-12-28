import React, { Component } from 'react';
import CustomerForm from './CustomerForm';

class FirstName extends Component {
    render() {
        return (
            <div>            
                <label>
                First Name:
                </label>
                <input className="FirstName" type="text" 
                onChange={() =>this.props.onChange}>
                {this.props.value}
                    </input>
                <br></br>
            </div>
        );
    }
}

export default FirstName;