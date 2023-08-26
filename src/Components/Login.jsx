import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ModuleCSSFile/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("wrong Email Or Password");
    }
  };

  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form className="login-form" onSubmit={handleLogin}>
              <h2>Login</h2>
              
              <input
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
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
              <button type="submit">Log In</button>
            </form>
            <span>Don't have an account?</span>
              <Link to="/register" className="login-link">
              
              <ul><span>Register here.</span></ul>
              </Link>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
