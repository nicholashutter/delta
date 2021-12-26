import React from 'react'; 
import './App.css';
import inputHandler from './inputHandler';

class App extends React.Component
{
  constructor(props)
  {
    super(props)

    this.state=
    {
      firstName: '',
      lastName: '',
      Address: '',
      Birthdate: ''
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
  handleSubmit = (event) => 
  {
    alert(`${this.state.firstName} ${this.state.lastName} ${this.state.Address} ${this.state.Birthdate}`);
  }
  
  render()
  {
    return(
    <div className='App'>   
    <form onSubmit={this.handleSubmit}>
      <div>               
      <label>
      First Name:
      </label>
      <input type="text" value={this.state.firstName} onChange={this.firstNameChange}/>
      <br></br>
      </div> 
  
      <div>
      <label>
      Last Name:
      </label>
      <input type="text" value={this.state.lastName}onChange={this.lastNameChange}/>
      <br></br>
      </div>

      <div>
      <label>
      Address:
      </label>
      <input type="text" value={this.state.Address} onChange={this.addressChange} />
      <br></br>
      </div>
  
      <div>
      <label>
      Birthdate (xx/xx/xxxx):
      </label>
      <input type="text" value={this.state.Birthdate} onChange={this.birthDateChange}/>
      <br></br>
      </div>

      <div>
      <button>Submit</button>
      </div>
    </form>
    </div>
    
    );
  }
}
  

export default App;
