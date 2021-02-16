// @ts-check

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./home/HomePage";
import EditorPage from "./article/EditorPage";
import ArticlePage from "./article/ArticlePage";
import SettingsPage from "./user/SettingsPage";
import ProfilePage from "./user/ProfilePage";
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
          <PrivateOnlyRoute path="/editor" component={EditorPage} />
          <PrivateOnlyRoute path="/editor/:slug" component={EditorPage} />
          <Route path="/article/:slug" component={ArticlePage} />
          <Route path="/@:username" component={ProfilePage} />
          <PrivateOnlyRoute path="/settings" component={SettingsPage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
