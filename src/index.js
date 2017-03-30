import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import './index.css';

import App from './App';
import Header from './Header';

 const Root = () => (

    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={ App } />
        <Match pattern="/store/:storeId" component={ App } />
        <Miss component={ App } />
      </div>
    </BrowserRouter>

)

render(
  <Root />,
  document.getElementById('root')
);

render(
  <Header />,
  document.getElementById('header')
)