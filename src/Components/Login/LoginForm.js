import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json));
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={({ target }) => setUsername(target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>login</button>
      </form>
      <Link to="/login/create">Create</Link>
    </section>
  );
};

export default LoginForm;
