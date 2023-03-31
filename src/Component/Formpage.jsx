function Formpage() {
     
     
     
  return (
    <div>
    <header className="App-header">
    <form>
    <h3> Registration Form </h3>
        <div className="form-fields">
        <label >
         First Name:
        </label> 
        <input type="text" /><br/>
        <label >
         Last Name:
        </label> 
        <input type="text" /><br/>
        <label >
          D.O.B:
        </label> 
        <input type="date"  /><br/>   
        <label >
         Gender:
        </label> 
        <span>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
        </span><br/>         
        <label>
          Email:
        </label> 
        <input type="email"  /><br/>
        <label>
          Password:
        </label> 
        <input type="password" /><br/>
        <label>
          Confirm Password:
        </label> 
        <input type="password" /><br/>
        </div>
        <button type="submit">Submit</button><br/>
        <a href="">Sign-in</a> 
      </form>
    </header>
    </div>
  );
}

  export default Formpage;