import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
    </Route>
  </Router>,
app);


// Initialise SmoothScroll
smoothScroll.init({
    speed: 1000,
    easing: 'easeOutCubic',
    updateURL: false,
});