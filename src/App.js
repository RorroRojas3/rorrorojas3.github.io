// React components
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// My Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Credits from './Components/Credits'
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
          <Route path="/about" exact component={Contact}></Route>
          <Route path="/projects" exact component={Projects}></Route>
          <Route path="/credits" exact component={Credits}></Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
