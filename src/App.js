import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import MainHeader from "./Components/Header/MainHeader";
import HomePage from "./Components/Pages/HomePage";
const App = ({ Login }) => {
  return (
    <div className="App">
      <header>
        <MainHeader></MainHeader>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>

          <Route path="/login">
            <LoginPage Login={Login} />
          </Route>

          <Route path="/home">
            <HomePage />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
