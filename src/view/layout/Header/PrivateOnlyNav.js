import { NavLink } from "react-router-dom";

const PrivateOnlyNav = ({ onSignOut, username }) => (
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
        className="nav-link"
        activeClassName="active"
        to={`/@${username}`}
        exact
      >
        {username}
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

export default PrivateOnlyNav;
