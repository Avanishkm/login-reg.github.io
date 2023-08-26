import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ModuleCSSFile/reg.css";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // to store value in local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form className="register-form" onSubmit={handleSubmit}>
              <h2>Register</h2>
              
              <input
                name="name"
                value={input.name}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                id="name"
                placeholder="Enter your name"
                className="inputbox2"
              />
              
              <input
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="email"
                placeholder="Enter your email address"
                id="email"
                className="inputbox"
              />
              <input
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                type="password"
                placeholder="********"
                id="password"
                className="inputbox1"
              />
              <button type="submit">Register</button>
            </form>
            <span>Don't have an account?</span>
            <Link to="/login" className="login-link">
              <ul><span>Login here.</span></ul>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
