import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//components
import Home from "./components/home/home";
import Layout from "./hoc/layout/layout";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
