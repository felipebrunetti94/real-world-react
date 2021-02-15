// @ts-check

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./home/HomePage";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import PrivateOnlyRoute from "./auth/PrivateOnlyRoute";
import PublicOnlyRoute from "./auth/PublicOnlyRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={HomePage} />
          <PublicOnlyRoute path="/login" component={LoginPage} />
          <PublicOnlyRoute path="/register" component={RegisterPage} />
          <PrivateOnlyRoute path="/editor" component={() => <h1>Editor</h1>} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
