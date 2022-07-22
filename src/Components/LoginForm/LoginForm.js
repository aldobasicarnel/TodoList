import React, { useState } from "react";
import classes from "./LoginForm.module.css";
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
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      <div className={classes["control-group"]}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          value={details.name}
          onChange={nameChangeHandler}
        />
      </div>
      <div className={classes["control-group"]}>
        <label>E-Mail</label>
        <input
          type="email"
          id="email"
          value={details.email}
          onChange={emailChangeHandler}
        ></input>
      </div>
      <div className={classes["control-group"]}>
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={details.password}
          onChange={passwordChangeHandler}
        />
      </div>
      <div className={classes.button}>
        <button onClick={submitHandler}>SUBMIT</button>
      </div>
    </form>
  );
};

export default LoginForm;
