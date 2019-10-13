import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import AdmPage from "./pages/AdmPage";
import LoginPage from "./pages/LoginPage";

import "typeface-roboto";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}></Route>
      <Route path="/adm" component={AdmPage}></Route>
      <Route path="/access" component={LoginPage}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
