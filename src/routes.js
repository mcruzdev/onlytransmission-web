import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AdmPage from "./pages/AdmPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      false ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  ></Route>
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomePage}></Route>
      <PrivateRoute path="/adm" component={AdmPage}></PrivateRoute>
      <Route path="/access" component={LoginPage}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
