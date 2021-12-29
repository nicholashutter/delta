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

  handleSubmit = (event) => 
  {
    event.preventDefault();
    this.setState({
      
      firstName: event.target.FirstName.value,
      lastName: event.target.LastName.value,
      Address: event.target.Address.value,
      Birthdate: event.target.Birthdate.value,
      State: event.target.State.value
     });
     
  }

  componentDidMount()
  {
    document.getElementById("hook").innerHTML=this.state.firstName;
  }

  render()
  {
    return(
    <div className='CustomerForm'>   
    <form>
      <div>               
          <FirstName firstName={this.state.firstName}/>
      </div> 
  
      <div>
          <LastName lastName={this.state.lastName}/>
      </div>

      <div>
          <Address address={this.state.Address}/>
      </div>
  
      <div>
          <Birthdate birthDate={this.state.Birthdate}/>
      </div>

      <div>
          <State State={this.state.State}/>
      </div>

      <div>
      <button onClick={this.handleSubmit}>Submit</button>
      </div>
    </form>
    </div>
    
    );
  }
}
  