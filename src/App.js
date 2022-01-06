import React from 'react'; 
import CustomerForm from './components/CustomerForm.js';
import CustomerLogin from './components/CustomerLogin.js';



class App extends React.Component
{ 
  constructor(){
    super();
    this.state = {
      showCustomerLogin: true,
      showCustomerForm: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  render()
  {
    let {showCustomerForm,showCustomerLogin} = this.state;
    return(
      <div>
      <div id="hook"/>
        {showCustomerLogin && <CustomerLogin
                                showCustomerLogin = {() => this.hideComponent("showCustomerLogin")} 
                                showCustomerForm = {() => this.hideComponent("showCustomerForm")} />}
        {showCustomerForm && <CustomerForm />}
      </div>
      
      

     
    );
  } 
  hideComponent(name){
    switch(name){
    case "showCustomerLogin":
      this.setState({showCustomerLogin: !this.state.showCustomerLogin})
      break; 
    case "showCustomerForm":
      this.setState({showCustomerForm: !this.state.showCustomerForm})
      break;
      default:
        break;
    } 
  }
} 
  

export default App;
