// @ts-check

import { NavLink } from "react-router-dom";
import useAuth from "../../state/auth/useAuth";

const Header = () => {
  const { loggedIn, onSignOut } = useAuth();
  return (
    <header>
      <nav className="navbar navbar-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            conduit
          </NavLink>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>

            {loggedIn ? (
              <PrivateOnlyNav onSignOut={onSignOut} />
            ) : (
              <PublicOnlyNav />
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

const PublicOnlyNav = () => (
  <>
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to="/login" exact>
        Sign in
      </NavLink>
    </li>
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
  </>
);

const PrivateOnlyNav = ({ onSignOut }) => (
  <>
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" to="/editor" exact>
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
    <li className="nav-item">
      <NavLink
        onClick={onSignOut}
        className="nav-link"
        activeClassName="active"
        to="/login"
        exact
      >
        Sign out
      </NavLink>
    </li>
  </>
);

export default Header;
