import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import LoginForm from "./components/LoginForm";

function App() {
  const admin = {
    email: "admin@gmail.com",
    password: "admin",
  };

  const [user, setUser] = useState({ name: "", email: "" });

  const Login = (details) => {
    console.log(details);

    if (details.email == admin.email && details.password == admin.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      alert("Złe dane");
      console.log("Złe dane");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="todo-app">
      {user.email != "" ? (
        <div>
          <h2 className="todo-title">
            Witaj, <span>{user.name}</span>
          </h2>
          <TodoList />
          <button className="log-button" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} />
      )}
    </div>
  );
}

export default App;
