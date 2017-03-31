import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import './index.css';

// import App from './App';
import Header from './Header';
import Course from './components/Course';
import HomePage from './components/HomePage';


// <Route path="/lesson/:id" component={ App } />
// <Route exact path="/" component={ App } />
const history = createBrowserHistory();


const Root = () => (
  <Router history={history}>
    <div>
      <Route path="/*" component={ Header } />
      <Switch>
        <Route exact path="/webdev101/" component={ HomePage } />
        <Route exact path="/webdev101/course/:id" component={ Course } />
      </Switch>
    </div>
  </Router>
)

render(
  <Root />,
  document.getElementById('root')
);

render(
  <Header />,
  document.getElementById('header')
)