import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../../state/auth/context";

const PublicOnlyRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useAuthContext({});
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
