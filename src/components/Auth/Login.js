import React from "react";
import userFormValidation from './useFormValidation';
import validateLogin from './validateLogin';

const INITIAL_STATE = {
  name: "",
  email: "",
  password:""
}

function Login(props) {
  const {handleChange, handleSubmit, values} = userFormValidation(
    INITIAL_STATE, validateLogin);
    
  const [login, setLogin]= React.useState(false);
  
  return(
    <div>
      <h2 className="mv3">{login ? "Login" : "Create Account"}</h2>
        <form onSubmit = {handleSubmit} className="fex flex-column">
          {!login &&<input 
            onChange = {handleChange}
            type="text"
            name="name"
            value={values.name}
            placeholder="Your name"
          />}
          <input 
            onChange = {handleChange}
            type="email"
            name="email"
            value={values.email}
            placeholder="Your email"
          />
          <input
            onChange = {handleChange} 
            type="password"
            name="password"
            value={values.password}
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
