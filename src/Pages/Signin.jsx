import React, { useState } from "react";
import Wrapper from "../css-wrapper/SignUp";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
   
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    
    if (!formData.email) 
      newErrors.email = "Email is required";

    if (!formData.password)
      newErrors.password = "Password is required";
   

   

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <h2 className="title">Sign In</h2>
        <form className="form" onSubmit={handleSubmit}>
        

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="input"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="input"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

        


          <button className="submit-button">Sign in</button>
          <p className="toggle-text">
           Create an account
            <span className="toggle-link"></span>
            <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default SignIn;
