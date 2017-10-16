import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import AppComponent from './app_component.jsx';
import shows from './shows.js';

render((
  <BrowserRouter>
    <Route path='/:id?' render={(props) => (
      <AppComponent {...props} shows={shows} />
    )}/>
  </BrowserRouter>
), document.getElementById('app'));
