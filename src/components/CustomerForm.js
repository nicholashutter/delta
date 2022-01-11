import React from 'react'; 
import '../css/CustomerForm.css';
import Birthdate from './Birthdate';
import State from './State';


export default class CustomerForm extends React.Component
{
  constructor(props)
  {
    super(props)

    this.state=
    {
      firstName: '',
      lastName: '',
      Address: '',
      Birthdate: '',
      State: ''
    }
  }

  handleSubmit = (event,name) => 
  {
    switch(name){
      case"firstName":
      this.setState({firstName: event.target.value})
      break;
      case"lastName":
      this.setState({lastName: event.target.value})
      break; 
      case"Address":
      this.setState({Address: event.target.value})
      break;
      case"birthDate":
      this.setState({Birthdate: event.target.value})
      break; 
      case"state":
      this.setState({State: event.target.value})
      break; 
    }

  }

  componentDidMount()
  {
    document.getElementById("hook").innerHTML=this.state.firstName;
  }

  componentDidUpdate()
  {
    console.log(this.state);

  }



  render()
  {
  let value1, value2;
    return(
    <div className='CustomerForm'>   
      <label>First Name:</label>
      <input name="FirstName" type="text"  onChange = {(event) => this.handleSubmit(event,'firstName')} />
      <br></br>
      <label>Last Name:</label>
      <input name="LastName" type="text"  onChange = {(event ) => this.handleSubmit(event,'lastName')}/>
      <br></br>
      <label> Address:</label>
      <input name="Address" type="text"  onChange ={(event) => this.handleSubmit(event,'Address')} />
      <br></br>
  
      <Birthdate birthDate={this.state.Birthdate}  
      onChange ={(event) => this.handleSubmit(event,'birthDate')} />
      <State State={this.state.State}  
      onChange ={(event) => this.handleSubmit(event,'state')} />
      <button onClick={this.handleSubmit}>Submit</button>
    </div>
    
    );
  }
}
  