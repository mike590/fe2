import React from 'react';
import {render} from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import AppComponent from './app_component.jsx';
import shows from './shows.js';

render((
  <HashRouter>
    <Route path='/:id?' render={(props) => (
      <AppComponent {...props} shows={shows} />
    )}/>
  </HashRouter>
), document.getElementById('app'));
