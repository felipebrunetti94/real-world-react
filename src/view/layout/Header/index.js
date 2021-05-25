// @ts-check

import { NavLink } from "react-router-dom";
import PrivateOnlyNav from "./PrivateOnlyNav";
import PublicOnlyNav from "./PublicOnlyNav";
import { useAuthContext } from "../../../state/auth/context";

const Header = () => {
  const { loggedIn, onSignOut, user } = useAuthContext();
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
              <PrivateOnlyNav onSignOut={onSignOut} username={user.username} />
            ) : (
              <PublicOnlyNav />
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
