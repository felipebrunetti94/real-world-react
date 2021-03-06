import { Route, Redirect } from "react-router-dom";
import useAuth from "../../state/auth/useAuth";

const PublicOnlyRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useAuth({});
  return (
    <Route
      {...rest}
      render={(props) =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicOnlyRoute;
