import React from "react";
import { Route, Router } from "react-router-dom";
import Home from "./core/Home.js";
import About from "./core/About.js";
import history from "./History";
import AdminInfo from "./admin/AdminInfo";
// import Menu from "./core/Menu.js";

export default function MainRouter() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/admin" component={AdminInfo} />
      </div>
    </Router>
  );
}
