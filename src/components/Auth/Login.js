import React from "react";
import userFormValidation from './useFormValidation';

const INITIAL_STATE = {
  name: "",
  email: "",
  password:""
}

function Login(props) {
  const {handleChange} = userFormValidation(INITIAL_STATE);
  const [login, setLogin]= React.useState(false);
  
  return(
    <div>
      <h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
        <form className="fex flex-column">
          {!login &&<input 
            onChange = {handleChange}
            type="text"
            name="name"
            placeholder="Your name"
          />}
          <input 
            onChange = {handleChange}
            type="email"
            name="email"
            placeholder="Your email"
          />
          <input
            onChange = {handleChange} 
            type="password"
            name="password"
            placeholder="Choose your password"
          />
          <div className="mt3">
            <button type='submit' className="button pointer mr2">submit</button>
            <button type='button' className="pointer button" onClick={()=>setLogin(prevLogin=>!prevLogin)}>{login? "need to create an account?" :"already have an account?"}</button>
          </div>
        </form>
    </div>
  ) 
}

export default Login;
