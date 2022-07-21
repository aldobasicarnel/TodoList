import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
const LoginPage = (props) => {
  const adminUser = {
    email: "admin@123.com",
    password: "12345678",
  };

  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const [reset, setReset] = useState("");

  const LoginHandler = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email,
        password: details.password,
      });
    } else {
      console.log("Email or Password is incorrect! Please try again");
    }

    setReset();
  };
  return (
    <div>
      {user.email !== "" ? <Redirect to="/home" /> : <Redirect to="/login" />}

      <LoginForm Login={LoginHandler} reset={reset} />
    </div>
  );
};

export default LoginPage;
