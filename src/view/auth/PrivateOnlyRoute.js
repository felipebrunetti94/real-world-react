import { Route, Redirect } from "react-router-dom";
import useAuth from "../../state/auth/useAuth";

const PrivateOnlyRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useAuth({});
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateOnlyRoute;
