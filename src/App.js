// React components
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// My Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects'

// CSS
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/resume" exact component={Resume}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/projects" exact component={Projects}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;