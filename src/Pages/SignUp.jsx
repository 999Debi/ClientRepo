import React, { useState } from "react";
import Wrapper from "../css-wrapper/SignUp";

// import React, { useState } from "react";
// import "./SignUp.css";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);
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

    if (isSignUp) {
      if (!formData.fullName) newErrors.fullName = "Full Name is required";
    }

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

    if (isSignUp) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(`${isSignUp ? "Sign Up" : "Login"} successful`, formData);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="left-section">
          <h2 className="title">{isSignUp ? "Sign Up" : "Login"}</h2>
          <form className="form" onSubmit={handleSubmit}>
            {isSignUp && (
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
            )}

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

                {isSignUp && (
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
            )}

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

            {isSignUp && (
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
            )}

            <button className="submit-button">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
            <p className="toggle-text">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <span
                className="toggle-link"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Login" : "Sign Up"}
              </span>
            </p>
          </form>
        </div>

        <div className="right-section">
          <img
            src="your-image-url-here"
            alt="Project Illustration"
            className="illustration"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;

