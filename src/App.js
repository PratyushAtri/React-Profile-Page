// React
import React, { Fragment } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// HTML
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import HTML from "./components/skills/html";
import CPP from "./components/skills/cpp";
import react from "./components/skills/react";
import cricket from "./components/skills/cricket";
import basketball from "./components/skills/basketball";
import Channel from "./components/channel";

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
                          <Route exact path='/Social' component={ Channel }/>
                          <Route exact path='/Skills/html' component={ HTML } />
                          <Route exact path='/Skills/cpp' component={ CPP } />
                          <Route exact path='/Skills/react' component={ react } />
                          <Route exact path='/Skills/cricket' component={ cricket } />
                          <Route exact path='/Skills/basketball' component={ basketball } />
                      </Switch>
              </Fragment>
          </Router>
)};

export default App;