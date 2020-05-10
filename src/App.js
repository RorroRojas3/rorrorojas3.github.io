// React components
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// My Components
import Home from "./components/Home";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Layout from "./components/Layout";

// CSS
import "./App.css";

function App() {
  return (
    <BrowserRouter>
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
}

export default App;
