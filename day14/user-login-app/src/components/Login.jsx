import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ regLogin, setUserData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if login credentials match
    if (email === regLogin.email && password === regLogin.password) {
      alert("User login successful");
      // Store user data after login
      setUserData({ ...regLogin, email, password });
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="Email1">Email address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="Email1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password1">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="Password1"
            placeholder="Password"
          />
        </div>

        <button onClick={handleLogin} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
