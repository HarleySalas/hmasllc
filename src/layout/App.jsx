import React from "react";
import { Route, Switch } from "react-router-dom";

import ScrollHandler from "../components/ScrollHandler/ScrollHandler.jsx";

import Header from "../components/Header/Header.jsx";
import LandingPage from "../pages/LandingPage/LandingPage.jsx";
import BlogPage from "../pages/BlogPage/BlogPage.jsx";
import BlogPost from '../pages/BlogPost/BlogPost.jsx';
import Footer from "../components/Footer/Footer.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";

const App = () => {
  return (
    <div className="app">
      <ScrollHandler />
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route path="/:slug" component={BlogPost} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
