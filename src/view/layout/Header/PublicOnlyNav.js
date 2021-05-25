import { NavLink } from "react-router-dom";

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

export default PublicOnlyNav;
