// React components
import React from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";

// My Components
import Home from "./components/Home";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Layout from "./components/Layout";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Layout>
          <Route path="/" exact component={Home}></Route>
          <Route path="/resume" exact component={Resume}></Route>
          <Route path="/about" exact component={Contact}></Route>
          <Route path="/projects" exact component={Projects}></Route>
        </Layout>
      </Switch>
    </HashRouter>
  );
}

export default App;
