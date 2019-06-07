import React, { Component } from "react";
import MainRouter from "./MainRouter";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./core/Home";
import About from "./core/About";
import AdminInfo from "./admin/AdminInfo";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
        <hr/>
        <About />
        <hr/>
        <AdminInfo />
        <hr/>
      </Provider>
    );
  }
}
