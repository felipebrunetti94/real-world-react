// @ts-check

import { NavLink } from "react-router-dom";

const Header = ({ user }) => (
  <header>
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          conduit
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/editor"
              exact
            >
              <i className="ion-compose"></i>&nbsp;New Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/settings"
              exact
            >
              <i className="ion-gear-a"></i>&nbsp;Settings
            </NavLink>
          </li>
          {user && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/register"
                exact
              >
                Sign up
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
