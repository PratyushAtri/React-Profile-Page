// React
import React, { Fragment } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// HTML
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Media from "./components/media";

// CSS
import './App.css';

const App = () => {
  return (
          <Router>
              <Fragment>
                  <Route exact path='/' component={ Home } />
                      <Switch>
                          <Route exact path='/About' component={ About }/>
                          <Route exact path='/Skills' component={ Skills }/>
                          <Route exact path='/Projects' component={ Projects }/>
                          <Route exact path='/Social' component={ Media }/>
                      </Switch>
              </Fragment>
          </Router>
)};

export default App;