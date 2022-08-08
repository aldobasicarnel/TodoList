import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/login">
              Login
            </NavLink>
            <NavLink activeClassName={classes.active} to="/home">
              Home
            </NavLink>
          </li>
        </ul>
        <h1>Todo Page</h1>
      </nav>
    </header>
  );
};

export default MainHeader;
