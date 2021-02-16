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
          <Route exact path="/" component={HomePage} />
          <PublicOnlyRoute exact path="/login" component={LoginPage} />
          <PublicOnlyRoute exact path="/register" component={RegisterPage} />
          <PrivateOnlyRoute exact path="/editor" component={EditorPage} />
          <PrivateOnlyRoute exact path="/editor/:slug" component={EditorPage} />
          <Route exact path="/article/:slug" component={ArticlePage} />
          <Route exact path="/@:username" component={ProfilePage} />
          <PrivateOnlyRoute exact path="/settings" component={SettingsPage} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
