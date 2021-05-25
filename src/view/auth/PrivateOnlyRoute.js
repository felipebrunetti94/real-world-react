import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../../state/auth/context";

const PrivateOnlyRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useAuthContext();
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
