import React from "react";
import { Route, Switch } from "react-router-dom";

import ScrollHandler from "../components/ScrollHandler/ScrollHandler.jsx";

import Header from "../components/Header/Header.jsx";
import LandingPage from "../pages/LandingPage/LandingPage.jsx";
import BlogPage from "../pages/BlogPage/BlogPage.jsx";

const App = () => {
  return (
    <div className="app">
      <ScrollHandler />
      <Header>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/blog" component={BlogPage} key="/blog" />
        </Switch>
      </Header>
    </div>
  );
};

export default App;
