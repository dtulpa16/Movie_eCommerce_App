import axios from "axios";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const user = {};

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(username, password);
  };

  async function loginUser(login, pass) {
    let payload = { username: login, password: pass };
    let response = await axios.post(
      `https://localhost:44394/api/authentication/login`,
      payload
    );
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    window.location = "/";
    //resets form
    setUserName("");
    setPassword("");
    return localStorage;
  }

  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <div class="fadeIn first">
          <br/>
          <br/>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="username"
            value={username}
            placeholder="Username"
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="password"
            id="password"
            class="fadeIn third"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
