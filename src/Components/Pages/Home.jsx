import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  const userName = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <h2>Homepage</h2>
            <p>Welcome - {userName.name}</p>
            <button onClick={handleLogout} type="button">
              Logout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
