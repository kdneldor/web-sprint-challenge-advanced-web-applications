import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState({
    credentials: { username: "", password: "" },
  });

  const handleChange = (e) => {
    setLogin({
      credentials: { ...login.credentials, [e.target.name]: e.target.value },
    });
  };

  const logIn = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/api/login", login.credentials)
    .then((res) => {
      console.log(res)
      localStorage.setItem("token", res.data.payload)
      history.push("/protected")

    })
  }

  return (
    <form onSubmit={logIn}>
      <input
        name="username"
        value={login.username}
        placeholder="Username"
        onChange={handleChange}
      ></input>
      <input
        name="password"
        value={login.password}
        placeholder="Password"
        onChange={handleChange}
      ></input>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
