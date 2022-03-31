import React from "react";
import { HashRouter as Router, withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import IndexPage from "../pages/index";
import LoginPage from "../pages/login";
import SearchPage from "../pages/searchPromotion";
import { Component } from "react";
import App from "../App";
const allRoutes = [
  {
    path: "/index",
    exact: true,
    component: IndexPage,
    title: "",
  },
  {
    path: "/login",
    exact: false,
    component: LoginPage,
    title: "",
  },
  {
    path: "/searchPromotion",
    exact: false,
    component: SearchPage,
    title: "",
  },
];

const AppWrap = withRouter(App);

export default class AppRoute extends Component {
  render() {
    return (
      <div>
        <Router>
          <AppWrap>
            {renderRoutes(
              allRoutes.map((item) => ({ ...item, key: item.path }))
            )}
          </AppWrap>
        </Router>
      </div>
    );
  }
}
