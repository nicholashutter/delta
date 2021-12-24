import './App.css';

function App() {
  return (  
<form onSubmit= {handleSubmit}>
    
  <label>
  First Name:
  <input type="text" name="first name" />
  </label>
  <br></br>

  <label>
   Last Name:
  <input type="text" name="last name" />
  </label>
  <br></br>

  <label>
   Address:
  <input type="text" name="Address" />
  </label>
  <br></br>

  <label>
   Birthdate (xx/xx/xxxx):
  <input type="text" name="Birthdate" />
  </label>
  <input type="submit" value="Submit" />
  <br></br>
</form>

  );
}
function handleSubmit(e)
{
  console.log("you clicked submit");
}

export default App;
