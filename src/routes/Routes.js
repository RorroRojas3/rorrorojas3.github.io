import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// My Components
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import Layout from "../components/Layout";

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Layout>
          <Route path="/" exact component={Home}></Route>
          <Route path="/resume" exact component={Resume}></Route>
          <Route path="/about" exact component={Contact}></Route>
          <Route path="/projects" exact component={Projects}></Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
