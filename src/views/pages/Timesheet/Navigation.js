import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Orion HR</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/">
              Timesheet
            </NavLink>
          </li>
          <li>
            <NavLink to="/manage">
              Manage
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
