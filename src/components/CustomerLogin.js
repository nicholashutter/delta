import React, { Component } from 'react';
import '../css/CustomerLogin.css';

class CustomerLogin extends Component {
    constructor(){
        super();
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
                        <input type='text' name = 'userName' onChange = {this.userNameOnChange}


                            //lift state up to app js 


                           ></input>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type='text' name = 'passWord' onChange = {this.passWordOnChange}
                        ></input>
                    </div>
                    <div>
                        <input type='submit' value ="Submit">
                        </input>
                        
                    </div>
                    
                </form >
            </div>
        );
    }
    handleSubmit = (event) =>
    {
        event.preventDefault(); 
        this.props.showCustomerForm("showCustomerForm");  
        this.props.showCustomerLogin("showCustomerLogin"); 
    

    }
    userNameOnChange = (event) =>
    {

        this.setState({
            userName : event.target.value
        })
        
    }
    passWordOnChange = (event) =>
    {
        this.setState({
            passWord : event.target.value
        })  
    }
    componentDidUpdate = () =>
    {
        console.log(this.state.userName);
        console.log(this.state.passWord);
    }

}

export default CustomerLogin;