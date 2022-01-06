import React, { Component } from 'react';
import '../css/CustomerLogin.css';

class CustomerLogin extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state ={
            userName: '',
            passWord: ''
        }
    }
    render() {
        return (
            <div className = "CustomerLogin">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <input type='submit' value ="Submit"></input>
                    </div>
                    
                </form >
            </div>
        );
    }
    handleSubmit()
    {
        this.props.showCustomerForm("showCustomerForm");  
        this.props.showCustomerLogin("showCustomerLogin"); 
             

    }

}

export default CustomerLogin;