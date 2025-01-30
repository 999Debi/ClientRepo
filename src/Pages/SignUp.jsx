import React, { useState } from "react";
import Wrapper from "../css-wrapper/SignUp";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};


      if (!formData.fullName) newErrors.fullName = "Full Name is required";
    

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.username) newErrors.username = "Username is required";

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters, contain an uppercase letter, a number, and a special character.";
    }

 
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log( formData);
    }
  };

  return (
    <Wrapper>
      
        <div className="container">
          <h2 className="title">Sign Up</h2>
          <form className="form" onSubmit={handleSubmit}>
            
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="input"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
                {errors.fullName && <p className="error">{errors.fullName}</p>}
              </div>
            

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
                <label>Username</label>
                <input
                  type="text"
                  className="input"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
                {errors.username && <p className="error">{errors.username}</p>}
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

           
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="input"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>
        

            <button className="submit-button">
             Sign Up
            </button>
            <p className="toggle-text">
              Already have an account?
              <span
                className="toggle-link"
           
              >
               
              </span>
              <Link to="/signin">Signin</Link>
            </p>
          </form>
        </div>


    
    </Wrapper>
  );
};

export default SignUp;

