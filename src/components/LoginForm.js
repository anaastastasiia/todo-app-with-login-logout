import React, { useState } from "react";

function LoginForm({ Login }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2 className="login-title">Login</h2>
        <div className="form-group">
          <label className="login-label" htmlFor="name">
            Podaj imię:{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="login-input"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="login-label" htmlFor="email">
            E-mail:{" "}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="login-input"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="login-label" htmlFor="password">
            Hasło:{" "}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="login-input"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
        </div>
        <input className="log-button" type="submit" value="Zaloguj się" />
      </div>
    </form>
  );
}

export default LoginForm;
