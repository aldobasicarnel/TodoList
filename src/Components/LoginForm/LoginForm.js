import React, { useState } from "react";
import classes from "./LoginForm.module.css";
import Card from "../Card/Card";

const LoginForm = ({ Login }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    Login(details);
  };

  const nameChangeHandler = (event) => {
    setDetails({ ...details, name: event.target.value });
  };

  const emailChangeHandler = (event) => {
    setDetails({ ...details, email: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    setDetails({ ...details, password: event.target.value });
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={classes.icon}>
          <i className="bi bi-person-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </i>
        </div>
        <h2>Login</h2>
        <div className={classes["control-group"]}>
          <input
            type="text"
            id="name"
            value={details.name}
            onChange={nameChangeHandler}
            placeholder="Name"
          />
        </div>
        <div className={classes["control-group"]}>
          <input
            type="email"
            id="email"
            value={details.email}
            onChange={emailChangeHandler}
            placeholder="E-Mail"
          ></input>
        </div>
        <div className={classes["control-group"]}>
          <input
            type="password"
            id="password"
            value={details.password}
            onChange={passwordChangeHandler}
            placeholder="Password"
          />
        </div>
        <button className={classes.button} onClick={submitHandler}>
          Log In
        </button>
      </form>
    </Card>
  );
};

export default LoginForm;
