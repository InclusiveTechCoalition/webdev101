import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Header from './Header';

 const Root = () => (
    <Router>
      <div>
        <Route path="/*" component={ Header } />
        <Route exact path="/" component={ App } />
        <Route path="/lesson/:id" component={ App } />
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