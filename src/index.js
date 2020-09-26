import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Main from "dashboard/Main.js";

import "shared/assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Main} />
      <Redirect from="/" to="/admin/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
