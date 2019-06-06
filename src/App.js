import React, { Component } from "react";
import MainRouter from "./MainRouter";
import { Provider } from 'react-redux'
import store from "./store";


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
<MainRouter />        
      </Provider>
    );
  }
}
