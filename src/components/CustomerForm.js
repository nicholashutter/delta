import React from 'react'; 
import '../css/CustomerForm.css';
import Address from './Address';
import Birthdate from './Birthdate';
import FirstName from './FirstName';
import LastName from './LastName';
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

  firstNameChange = (event) => 
  {
    this.setState
      ({
          firstName: event.target.value
      })
  }
  lastNameChange = (event) => 
  {
    this.setState
      ({
          lastName: event.target.value
      })
  }
  addressChange = (event) => 
  {
    this.setState
      ({
          Address: event.target.value
      })
  }
  birthDateChange = (event) => 
  {
    this.setState
      ({
          Birthdate: event.target.value
      })
  }

  StateChange = (event) => 
  {
    this.setState
      ({
          State: event.target.value
      })
  }
  handleSubmit = (event) => 
  {
    alert(`${this.state.firstName} ${this.state.lastName} ${this.state.Address} ${this.state.Birthdate}`);
  }


  
  render()
  {
    return(
    <div className='CustomerForm'>   
    <form onSubmit={this.handleSubmit}>
      <div>               
          <FirstName firstName={this.state.firstName} onChange={() =>this.firstNameChange}/>
      </div> 
  
      <div>
          <LastName lastName={this.state.lastName} onChange={() =>this.lastNameChange}/>
      </div>

      <div>
          <Address address={this.state.Address} onChange={() =>this.addressChange}/>
      </div>
  
      <div>
          <Birthdate birthDate={this.state.Birthdate} onChange={() =>this.birthDateChange}/>
      </div>

      <div>
          <State State={this.state.State} onChange={() =>this.StateChange}/>
      </div>

      <div>
      <button>Submit</button>
      </div>
    </form>
    </div>
    
    );
  }
}
  